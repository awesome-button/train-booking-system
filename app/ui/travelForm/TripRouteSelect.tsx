import React from "react";

type TripRouteSelect = {
  handleOrigin: (origin: string) => void;
  handleDestination: (destination: string) => void;
  route: { origin: string; destination: string };
};

const TripRouteSelect = ({
  handleOrigin,
  handleDestination,
  route
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
    </div>
  );
};

export default TripRouteSelect;
