import React from "react";
import { TripType } from "../lib/types";

type TripSearchFormSubmitData = {
  tripType: TripType;
  departureDate: string;
  returnDate: string;
};

const useSubmitTripSearchForm = () => {
  const handleSubmitForm = ({
    tripType,
    departureDate,
    returnDate
  }: TripSearchFormSubmitData) => {
    const tripData = {
      tripType,
      departureDate,
      returnDate
    };
    console.log("Submitting the following data to the server:");
    console.log(tripData);
    // error handling here
    return { isSearchSuccessful: true };
  };

  return { handleSubmitForm };
};

export default useSubmitTripSearchForm;
