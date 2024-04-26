import React, { useState } from "react";
import useDatePicker from "../../hooks/useDatePicker";
import CustomDayPicker from "./CustomDayPicker";
import { PickerType } from "../../lib/types";

export enum TripType {
  ONE_WAY = "ONE_WAY",
  RETURN = "RETURN"
}

const TravelForm = () => {
  const [tripType, setTripType] = useState<TripType>(TripType.ONE_WAY);

  const {
    handleSingleTripSelect,
    handleRangeSelect,
    fromDateValue,
    toDateValue,
    fromDate,
    toDate,
    clearToDate
  } = useDatePicker(tripType);

  const changeTripType = (e) => {
    setTripType(e.target.value);
    if (e.target.value === TripType.ONE_WAY) clearToDate();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      tripType,
      departureDate: fromDateValue,
      returnDate: toDateValue
    };
    console.log("Submitting the following data to the server:");
    console.log(data);
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <select
        onChange={changeTripType}
        name="typeOfTrip"
        id="type-of-trip-select"
      >
        <option value={TripType.ONE_WAY}>One Way</option>
        <option value={TripType.RETURN}>Return Trip</option>
      </select>
      <div>
        <input type="text" placeholder="From" size={16} />
        <input type="text" placeholder="To" size={16} />
      </div>

      <CustomDayPicker
        pickerType={
          tripType === TripType.ONE_WAY ? PickerType.SINGLE : PickerType.RANGE
        }
        handleSingleTripSelect={handleSingleTripSelect}
        handleRangeSelect={handleRangeSelect}
        fromDateValue={fromDateValue}
        toDateValue={toDateValue}
        fromDate={fromDate}
        toDate={toDate}
      />

      <div className="form-example">
        <input type="submit" value="Search" disabled={false} />
      </div>
    </form>
  );
};

export default TravelForm;
