import { addMonths } from "date-fns/addMonths";
import React, { useMemo } from "react";
import {
  DayPicker,
  DayPickerBase,
  DayPickerRangeProps,
  DayPickerSingleProps,
  SelectRangeEventHandler,
  SelectSingleEventHandler
} from "react-day-picker";
import { startOfMonth } from "date-fns/startOfMonth";
import { startOfYesterday } from "date-fns/startOfYesterday";
import DayPickerFooter from "./DayPickerFooter";
import { PickerType } from "@/app/lib/types";

const disabledDays = [
  { from: startOfMonth(new Date()), to: startOfYesterday() }
];

type CustomDayPickerType = {
  pickerType: PickerType;
  handleSingleTripSelect: SelectSingleEventHandler;
  handleRangeSelect: SelectRangeEventHandler;
  departureDateValue: string;
  returnDateValue: string;
  departureDate: Date;
  returnDate: Date;
};

const CustomDayPicker = ({
  pickerType,
  handleSingleTripSelect,
  handleRangeSelect,
  departureDateValue,
  returnDateValue,
  departureDate,
  returnDate
}: CustomDayPickerType) => {
  const selectedRange = useMemo(() => {
    return { from: departureDate, to: returnDate };
  }, [departureDate, returnDate]);

  const commonProps = {
    fromMonth: new Date(),
    toMonth: addMonths(new Date(), 12),
    disabled: disabledDays
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
          placeholder: "From Date",
          value: returnDateValue
        }}
      />
    )
  };

  return pickerType === PickerType.SINGLE ? (
    <DayPicker {...singlePickerProps} />
  ) : (
    <DayPicker {...rangePickerProps} />
  );
};

export default CustomDayPicker;
