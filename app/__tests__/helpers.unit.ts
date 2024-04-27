import { subDays } from "date-fns/subDays";
import { checkIfValidTripDates } from "../lib/helpers";
import { TripType } from "../lib/types";

describe("Test trip dates validation function", () => {
  describe("Departure date", () => {
    it("should not be in the past", async () => {
      expect(
        (
          await checkIfValidTripDates(
            TripType.ONE_WAY,
            subDays(new Date(), 2),
            null
          )
        ).valid
      ).toBe(false);
    });

    it("is valid if it is equal or later than today", async () => {
      expect(
        (await checkIfValidTripDates(TripType.ONE_WAY, new Date(), null)).valid
      ).toBe(true);
    });

    it("cannot be null", async () => {
      expect(
        (await checkIfValidTripDates(TripType.ONE_WAY, null, new Date())).valid
      ).toBe(false);
    });
  });

  describe("Return date", () => {
    it("should not be null for a return trip", async () => {
      expect(
        (await checkIfValidTripDates(TripType.RETURN, new Date(), null)).valid
      ).toBe(false);
    });

    it("should not fail if null for a one-way trip", async () => {
      expect(
        (await checkIfValidTripDates(TripType.ONE_WAY, new Date(), null)).valid
      ).toBe(true);
    });

    it("should be equal or later than departure date", async () => {
      expect(
        (await checkIfValidTripDates(TripType.RETURN, new Date(), new Date()))
          .valid
      ).toBe(true);
    });

    it("cannot be before departure date", async () => {
      expect(
        (
          await checkIfValidTripDates(
            TripType.RETURN,
            new Date(),
            subDays(new Date(), 1)
          )
        ).valid
      ).toBe(false);
    });
  });
});
