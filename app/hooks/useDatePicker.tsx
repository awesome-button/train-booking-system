import { TripType } from "@/app/lib/types";
import { addWeeks } from "date-fns";
import { format } from "date-fns/format";
import { useMemo, useState } from "react";
import {
  DateRange,
  SelectRangeEventHandler,
  SelectSingleEventHandler
} from "react-day-picker";

const useDatePicker = (tripType: TripType) => {
  const [fromDate, setFromDate] = useState<Date>(new Date());
  const [toDate, setToDate] = useState<Date>(
    tripType === TripType.RETURN ? addWeeks(new Date(), 1) : null
  );

  const fromDateValue = useMemo(
    () => (fromDate ? format(fromDate, "yyyy-MM-dd") : ""),
    [fromDate]
  );
  const toDateValue = useMemo(
    () => (toDate ? format(toDate, "yyyy-MM-dd") : ""),
    [toDate]
  );

  const handleSingleTripSelect: SelectSingleEventHandler = (date: Date) => {
    setFromDate(date);
  };

  const handleRangeSelect: SelectRangeEventHandler = (
    range: DateRange | undefined
  ) => {
    if (range?.from) {
      setFromDate(range.from);
    } else {
      setFromDate(null);
    }
    if (range?.to) {
      setToDate(range.to);
    } else {
      setToDate(null);
    }
  };

  const clearToDate = () => {
    setToDate(null);
  };

  return {
    handleSingleTripSelect,
    handleRangeSelect,
    fromDateValue,
    toDateValue,
    fromDate,
    toDate,
    clearToDate
  };
};

export default useDatePicker;
