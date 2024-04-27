import React from "react";

type TripRouteSelect = {
  handleOrigin: (origin: string) => void;
  handleDestination: (destination: string) => void;
  route: { origin: string; destination: string };
  routeValidationError: string;
};

const TripRouteSelect = ({
  handleOrigin,
  handleDestination,
  route,
  routeValidationError
}: TripRouteSelect) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Origin"
        size={16}
        value={route.origin}
        onChange={(e) => handleOrigin(e.target.value)}
      />
      <input
        type="text"
        placeholder="Destination"
        size={16}
        value={route.destination}
        onChange={(e) => handleDestination(e.target.value)}
      />
      <p>{routeValidationError}</p>
    </div>
  );
};

export default TripRouteSelect;
