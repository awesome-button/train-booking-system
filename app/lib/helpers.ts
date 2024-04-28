import * as yup from "yup";
import { TripType, ValidDatesFunction } from "./types";
import { startOfDay } from "date-fns/startOfDay";

export const checkIfValidTripDates: ValidDatesFunction = async (
  tripType,
  departureDate,
  returnDate
) => {
  const schema = yup.object().shape({
    tripType: yup.string(),
    departureDate: yup
      .date()
      .min(
        startOfDay(new Date()),
        "The departure date cannot be earlier than today"
      ),
    returnDate: yup.date().when("tripType", {
      is: (tripType: TripType) => tripType === TripType.RETURN,
      then: (schema) =>
        schema
          .required("A return date should be provided for a return trip")
          .min(
            yup.ref("departureDate"),
            "The return date must be same or later than the departure date"
          ),
      otherwise: (schema) => schema.nullable()
    })
  });

  try {
    const validDates = await schema.isValid({
      tripType,
      departureDate,
      returnDate
    });

    if (validDates) return { valid: true };
    await schema.validate({ tripType, departureDate, returnDate });
  } catch (err) {
    return { valid: false, error: err.errors[0] };
  }
};
