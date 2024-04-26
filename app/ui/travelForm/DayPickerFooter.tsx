import React from "react";
import DateInput from "../primitives/DateInput";

type DayPickerFooter = {
  fromDate: { value: string; disabled: boolean; placeholder: string };
  toDate: { value: string; disabled: boolean; placeholder: string };
};

const DayPickerFooter = ({ fromDate, toDate }: DayPickerFooter) => {
  return (
    <div>
      <DateInput
        disabled={fromDate.disabled}
        placeholder={fromDate.placeholder}
        value={fromDate.value}
      />
      {" – "}
      <DateInput
        disabled={toDate.disabled}
        placeholder={toDate.placeholder}
        value={toDate.value}
      />
    </div>
  );
};

export default DayPickerFooter;
