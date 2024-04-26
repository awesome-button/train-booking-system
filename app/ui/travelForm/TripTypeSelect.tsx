import React from "react";
import { TripType } from "./TripSeacrhForm";

const TripTypeSelect = ({ onChange }: { onChange: (e: any) => void }) => {
  return (
    <select onChange={onChange} name="typeOfTrip" id="type-of-trip-select">
      <option value={TripType.ONE_WAY}>One Way</option>
      <option value={TripType.RETURN}>Return Trip</option>
    </select>
  );
};

export default TripTypeSelect;
