import React, { useState } from "react";
import useDatePicker from "../../hooks/useDatePicker";
import CustomDayPicker from "./CustomDayPicker";
import { PickerType, TripType } from "../../lib/types";
import TripTypeSelect from "./TripTypeSelect";
import TripRouteSelect from "./TripRouteSelect";
import useTripRoute from "@/app/hooks/useTripRoute";
import useSubmitTripSearchForm from "@/app/hooks/useSubmitTripSearchForm";

const TripSearchForm = () => {
  const [tripType, setTripType] = useState<TripType>(TripType.ONE_WAY);

  const {
    route,
    handleOrigin,
    handleDestination,
    isValidTripRoute,
    validationError: routeValidationError
  } = useTripRoute();

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

  const dayPickerProps = {
    pickerType:
      tripType === TripType.ONE_WAY ? PickerType.SINGLE : PickerType.RANGE,
    handleSingleTripSelect,
    handleRangeSelect,
    tripDates,
    areValidTripDates: formIsValid,
    datesValidationError
  };

  const routeSelectProps = {
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

  return (
    <form
      className="max-w-md mx-auto grid gap-2"
      method="post"
      onSubmit={handleSubmit}
    >
      <TripTypeSelect onChange={changeTripType} />
      <TripRouteSelect {...routeSelectProps} />
      <CustomDayPicker {...dayPickerProps} />

      <div className="w-full">
        <input
          className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-6 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
        disabled:bg-blue-400 disabled:dark:bg-blue-500 disabled:cursor-not-allowed"
          type="submit"
          value="Search"
          disabled={!isValidTripRoute}
        />
      </div>
    </form>
  );
};

export default TripSearchForm;
