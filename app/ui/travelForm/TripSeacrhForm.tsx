import React, { useState } from "react";
import useDatePicker from "../../hooks/useDatePicker";
import CustomDayPicker from "./CustomDayPicker";
import { PickerType } from "../../lib/types";
import TripTypeSelect from "./TripTypeSelect";
import TripRouteSelect from "./TripRouteSelect";
import useTripRoute from "@/app/hooks/useTripRoute";
import useSubmitTripSearchForm from "@/app/hooks/useSubmitTripSearchForm";

export enum TripType {
  ONE_WAY = "ONE_WAY",
  RETURN = "RETURN"
}

const TripSearchForm = () => {
  const { route, handleOrigin, handleDestination } = useTripRoute();

  const [tripType, setTripType] = useState<TripType>(TripType.ONE_WAY);

  const {
    handleSingleTripSelect,
    handleRangeSelect,
    departureDateValue,
    returnDateValue,
    departureDate,
    returnDate,
    clearReturnDate
  } = useDatePicker(tripType);

  const { handleSubmitForm } = useSubmitTripSearchForm();

  const changeTripType = (e) => {
    setTripType(e.target.value);
    if (e.target.value === TripType.ONE_WAY) clearReturnDate();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      tripType,
      departureDate: departureDateValue,
      returnDate: returnDateValue
    };
    handleSubmitForm(data);
  };

  const customerDayPickerProps = {
    pickerType:
      tripType === TripType.ONE_WAY ? PickerType.SINGLE : PickerType.RANGE,
    handleSingleTripSelect,
    handleRangeSelect,
    departureDateValue,
    returnDateValue,
    departureDate,
    returnDate
  };

  const travelRouteSelectProps = { route, handleOrigin, handleDestination };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <TripTypeSelect onChange={changeTripType} />
      <TripRouteSelect {...travelRouteSelectProps} />
      <CustomDayPicker {...customerDayPickerProps} />

      <div>
        {/* when should the button be disabled? */}
        <input type="submit" value="Search" disabled={false} />
      </div>
    </form>
  );
};

export default TripSearchForm;
