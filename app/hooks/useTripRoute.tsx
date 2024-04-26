import React, { useState } from "react";

const useTripRoute = () => {
  const [origin, setOrigin] = useState("Stockholm");
  const [destination, setDestination] = useState("Rome");

  const handleOrigin = (origin: string) => {
    setOrigin(origin);
  };

  const handleDestination = (destination: string) => {
    setDestination(destination);
  };

  return { handleOrigin, handleDestination, route: { origin, destination } };
};

export default useTripRoute;
