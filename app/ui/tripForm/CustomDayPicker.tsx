import { addMonths } from "date-fns/addMonths";
import React, { useMemo } from "react";
import {
  DayPicker,
  DayPickerRangeProps,
  DayPickerSingleProps,
  SelectRangeEventHandler,
  SelectSingleEventHandler
} from "react-day-picker";
import { startOfMonth } from "date-fns/startOfMonth";
import { startOfYesterday } from "date-fns/startOfYesterday";
import DayPickerFooter from "./DayPickerFooter";
import { PickerType } from "@/app/lib/types";

type TripDates = {
  departureDateValue: string;
  returnDateValue: string;
  departureDate: Date;
  returnDate: Date;
};

const disabledDays = [
  { from: startOfMonth(new Date()), to: startOfYesterday() }
];

type CustomDayPickerType = {
  pickerType: PickerType;
  handleSingleTripSelect: SelectSingleEventHandler;
  handleRangeSelect: SelectRangeEventHandler;
  tripDates: TripDates;
  areValidTripDates: boolean;
  datesValidationError: string;
};

const CustomDayPicker = ({
  pickerType,
  handleSingleTripSelect,
  handleRangeSelect,
  tripDates,
  datesValidationError
}: CustomDayPickerType) => {
  const { departureDateValue, returnDateValue, departureDate, returnDate } =
    tripDates;
  const selectedRange = useMemo(() => {
    return { from: departureDate, to: returnDate };
  }, [departureDate, returnDate]);

  const commonProps = {
    fromMonth: new Date(),
    toMonth: addMonths(new Date(), 12),
    disabled: disabledDays,
    styles: { root: { marginBottom: 0 } }
  };

  const singlePickerProps: DayPickerSingleProps = {
    ...commonProps,
    mode: "single",
    onSelect: handleSingleTripSelect,
    selected: departureDate,
    footer: (
      <DayPickerFooter
        departureDate={{
          disabled: false,
          placeholder: "From Date",
          value: departureDateValue
        }}
        returnDate={{
          disabled: true,
          placeholder: "To Date",
          value: returnDateValue
        }}
      />
    )
  };

  const rangePickerProps: DayPickerRangeProps = {
    ...commonProps,
    mode: "range",
    onSelect: handleRangeSelect,
    selected: selectedRange,
    footer: (
      <DayPickerFooter
        departureDate={{
          disabled: false,
          placeholder: "From Date",
          value: departureDateValue
        }}
        returnDate={{
          disabled: false,
          placeholder: "To Date",
          value: returnDateValue
        }}
      />
    )
  };

  return (
    <div className="flex flex-col items-center">
      {pickerType === PickerType.SINGLE ? (
        <DayPicker {...singlePickerProps} />
      ) : (
        <DayPicker {...rangePickerProps} />
      )}
      <p className="text-red-500 text-sm px-1 w-10/12">
        {datesValidationError}
      </p>
    </div>
  );
};

export default CustomDayPicker;
