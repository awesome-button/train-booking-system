import React, { useState } from "react";
import useDatePicker from "../../hooks/useDatePicker";
import CustomDayPicker from "./CustomDayPicker";
import { PickerType, TripType } from "../../lib/types";
import TripTypeSelect from "./TripTypeSelect";
import TripRouteSelect from "./TripRouteSelect";
import useTripRoute from "@/app/hooks/useTripRoute";
import useSubmitTripSearchForm from "@/app/hooks/useSubmitTripSearchForm";

const TripSearchForm = () => {
  const {
    route,
    handleOrigin,
    handleDestination,
    isValidTripRoute,
    validationError: routeValidationError
  } = useTripRoute();

  const [tripType, setTripType] = useState<TripType>(TripType.ONE_WAY);

  const {
    handleSingleTripSelect,
    handleRangeSelect,
    tripDates,
    clearReturnDate,
    areValidTripDates,
    validationError: datesValidationError
  } = useDatePicker(tripType);

  const { handleSubmitForm } = useSubmitTripSearchForm();

  const changeTripType = (e) => {
    setTripType(e.target.value);
    if (e.target.value === TripType.ONE_WAY) clearReturnDate();
  };

  let formIsValid = false;

  const customerDayPickerProps = {
    pickerType:
      tripType === TripType.ONE_WAY ? PickerType.SINGLE : PickerType.RANGE,
    handleSingleTripSelect,
    handleRangeSelect,
    tripDates,
    areValidTripDates: formIsValid,
    datesValidationError
  };

  const travelRouteSelectProps = {
    route,
    handleOrigin,
    handleDestination,
    routeValidationError
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validDates = await areValidTripDates();

    if (validDates && isValidTripRoute) formIsValid = true;

    if (!formIsValid) return;

    const data = {
      tripType,
      departureDate: tripDates.departureDateValue,
      returnDate: tripDates.returnDateValue,
      route
    };
    handleSubmitForm(data);
  };

  console.log("route error", routeValidationError);
  return (
    <form method="post" onSubmit={handleSubmit}>
      <TripTypeSelect onChange={changeTripType} />
      <TripRouteSelect {...travelRouteSelectProps} />
      <CustomDayPicker {...customerDayPickerProps} />

      <div>
        <input type="submit" value="Search" disabled={!isValidTripRoute} />
      </div>
    </form>
  );
};

export default TripSearchForm;
