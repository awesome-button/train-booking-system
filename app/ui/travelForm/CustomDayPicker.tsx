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
import DateInput from "../primitives/DateInput";
import { startOfMonth } from "date-fns/startOfMonth";
import { startOfYesterday } from "date-fns/startOfYesterday";
import DayPickerFooter from "./DayPickerFooter";
import { toDate } from "date-fns";
import { PickerType } from "@/app/lib/types";

const disabledDays = [
  { from: startOfMonth(new Date()), to: startOfYesterday() }
];

type CustomDayPickerType = {
  pickerType: PickerType;
  handleSingleTripSelect: SelectSingleEventHandler;
  handleRangeSelect: SelectRangeEventHandler;
  fromDateValue: string;
  toDateValue: string;
  fromDate: Date;
  toDate: Date;
};

const CustomDayPicker = ({
  pickerType,
  handleSingleTripSelect,
  handleRangeSelect,
  fromDateValue,
  toDateValue,
  fromDate,
  toDate
}: CustomDayPickerType) => {
  const selectedRange = useMemo(() => {
    return { from: fromDate, to: toDate };
  }, [fromDate, toDate]);

  const commonProps = {
    fromMonth: new Date(),
    toMonth: addMonths(new Date(), 12),
    disabled: disabledDays
  };

  const singlePickerProps: DayPickerSingleProps = {
    ...commonProps,
    mode: "single",
    onSelect: handleSingleTripSelect,
    selected: fromDate,
    footer: (
      <DayPickerFooter
        fromDate={{
          disabled: false,
          placeholder: "From Date",
          value: fromDateValue
        }}
        toDate={{
          disabled: true,
          placeholder: "To Date",
          value: toDateValue
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
        fromDate={{
          disabled: false,
          placeholder: "From Date",
          value: fromDateValue
        }}
        toDate={{
          disabled: false,
          placeholder: "From Date",
          value: toDateValue
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
