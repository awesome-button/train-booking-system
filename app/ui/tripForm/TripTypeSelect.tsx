import { TripType } from "@/app/lib/types";
import React from "react";

const TripTypeSelect = ({ onChange }: { onChange: (e: any) => void }) => {
  return (
    <select
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      onChange={onChange}
      name="typeOfTrip"
      id="type-of-trip-select"
    >
      <option value={TripType.ONE_WAY}>One Way</option>
      <option value={TripType.RETURN}>Return Trip</option>
    </select>
  );
};

export default TripTypeSelect;
