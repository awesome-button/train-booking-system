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
    <div className="grid gap-1">
      <div className="grid grid-cols-2 gap-2 w-full">
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 invalid:border-red-500 invalid:text-red-600
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
          type="text"
          placeholder="Origin"
          size={16}
          value={route.origin}
          onChange={(e) => handleOrigin(e.target.value)}
          required
        />
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 invalid:border-red-500 invalid:text-red-600
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
          type="text"
          placeholder="Destination"
          size={16}
          value={route.destination}
          onChange={(e) => handleDestination(e.target.value)}
          required
        />
      </div>
      <p className="text-red-500 text-sm px-1">{routeValidationError}</p>
    </div>
  );
};

export default TripRouteSelect;
