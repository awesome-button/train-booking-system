import React from "react";
import { TripType } from "../lib/types";

type TripSearchFormSubmitData = {
  tripType: TripType;
  departureDate: string;
  returnDate: string;
  route: { destination: string; origin: string };
};

const useSubmitTripSearchForm = () => {
  const handleSubmitForm = ({
    tripType,
    departureDate,
    returnDate,
    route: { destination, origin }
  }: TripSearchFormSubmitData) => {
    const tripData = {
      tripType,
      departureDate,
      returnDate,
      route: { destination, origin }
    };
    console.log("Submitting the following data to the server:");
    console.log(tripData);
    // error handling here
    return { isSearchSuccessful: true };
  };

  return { handleSubmitForm };
};

export default useSubmitTripSearchForm;
