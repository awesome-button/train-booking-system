import { TripType } from "@/app/lib/types";
import { addWeeks } from "date-fns";
import { format } from "date-fns/format";
import { useMemo, useState } from "react";
import {
  DateRange,
  SelectRangeEventHandler,
  SelectSingleEventHandler
} from "react-day-picker";
import { checkIfValidTripDates } from "../lib/utils";

const useDatePicker = (tripType: TripType) => {
  const [departureDate, setDepartureDate] = useState<Date>(new Date());
  const [returnDate, setReturnDate] = useState<Date>(
    tripType === TripType.RETURN ? addWeeks(new Date(), 1) : null
  );
  const [validationError, setValidationError] = useState("");

  const departureDateValue = useMemo(
    () => (departureDate ? format(departureDate, "yyyy-MM-dd") : ""),
    [departureDate]
  );
  const returnDateValue = useMemo(
    () => (returnDate ? format(returnDate, "yyyy-MM-dd") : ""),
    [returnDate]
  );

  const handleSingleTripSelect: SelectSingleEventHandler = (date: Date) => {
    setDepartureDate(date);
  };

  const handleRangeSelect: SelectRangeEventHandler = (
    range: DateRange | undefined
  ) => {
    if (range?.from) {
      setDepartureDate(range.from);
    } else {
      setDepartureDate(null);
    }
    if (range?.to) {
      setReturnDate(range.to);
    } else {
      setReturnDate(null);
    }
  };

  const clearReturnDate = () => {
    setReturnDate(null);
  };

  const areValidTripDates = async () => {
    setValidationError("");

    const validationResult = await checkIfValidTripDates(
      tripType,
      departureDate,
      returnDate
    );

    if (validationResult.valid) return true;

    setValidationError(validationResult.error);
    return false;
  };

  return {
    handleSingleTripSelect,
    handleRangeSelect,
    tripDates: {
      departureDate,
      returnDate,
      departureDateValue,
      returnDateValue
    },
    clearReturnDate,
    areValidTripDates,
    validationError
  };
};

export default useDatePicker;
