import { addMonths } from "date-fns/addMonths";
import React, { useMemo } from "react";
import {
  DayPicker,
  SelectRangeEventHandler,
  SelectSingleEventHandler
} from "react-day-picker";
import DateInput from "./DateInput";
import { startOfMonth } from "date-fns/startOfMonth";
import { startOfYesterday } from "date-fns/startOfYesterday";

const disabledDays = [
  { from: startOfMonth(new Date()), to: startOfYesterday() }
];

export enum PickerType {
  SINGLE = "SINGLE",
  RANGE = "RANGE"
}

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

  const dayPickerProps = useMemo(() => {
    return pickerType === PickerType.SINGLE
      ? {
          mode: "single",
          onSelect: handleSingleTripSelect,
          toDateDisabled: true,
          selected: fromDate
        }
      : {
          mode: "range",
          onSelect: handleRangeSelect,
          toDateDisabled: false,
          selected: selectedRange
        };
  }, [
    handleSingleTripSelect,
    handleRangeSelect,
    fromDate,
    selectedRange,
    pickerType
  ]);

  const { mode, onSelect, toDateDisabled, selected } = dayPickerProps;

  return (
    <DayPicker
      fromMonth={new Date()}
      toMonth={addMonths(new Date(), 12)}
      mode={mode}
      selected={selected}
      disabled={disabledDays}
      onSelect={onSelect}
      footer={
        <div>
          <DateInput
            disabled={false}
            placeholder="From Date"
            value={fromDateValue}
          />
          {" – "}
          <DateInput
            disabled={toDateDisabled}
            placeholder="To Date"
            value={toDateValue}
          />
        </div>
      }
    />
  );
};

export default CustomDayPicker;
