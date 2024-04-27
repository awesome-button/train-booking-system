import { useState } from "react";

const useTripRoute = () => {
  const [origin, setOrigin] = useState("Stockholm");
  const [destination, setDestination] = useState("Rome");
  const [validationError, setValidationError] = useState("");

  const handleOrigin = (origin: string) => {
    setValidationError("");

    setOrigin(origin);

    if (!origin.length) setValidationError("Origin is a required field");
  };

  const handleDestination = (destination: string) => {
    setValidationError("");

    setDestination(destination);

    if (!destination.length)
      setValidationError("Destination is a required field");
  };

  const isValidTripRoute = !validationError.length;

  return {
    handleOrigin,
    handleDestination,
    route: { origin, destination },
    validationError,
    isValidTripRoute
  };
};

export default useTripRoute;
