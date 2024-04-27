export enum TripType {
  ONE_WAY = "ONE_WAY",
  RETURN = "RETURN"
}

export enum PickerType {
  SINGLE = "SINGLE",
  RANGE = "RANGE"
}

// util functions types

type InputValidationResult = Promise<{
  valid: boolean;
  error?: string;
}>;

export type ValidDatesFunction = (
  tripType: TripType,
  departureDate: Date,
  returnDate: Date
) => InputValidationResult;
