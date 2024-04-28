import React from "react";
import DateInput from "../primitives/DateInput";

type DayPickerFooter = {
  departureDate: { value: string; disabled: boolean; placeholder: string };
  returnDate: { value: string; disabled: boolean; placeholder: string };
};

const DayPickerFooter = ({ departureDate, returnDate }: DayPickerFooter) => {
  return (
    <div className="grid grid-cols-2 gap-2 mt-2">
      <DateInput
        disabled={departureDate.disabled}
        placeholder={departureDate.placeholder}
        value={departureDate.value}
      />
      <DateInput
        disabled={returnDate.disabled}
        placeholder={returnDate.placeholder}
        value={returnDate.value}
      />
    </div>
  );
};

export default DayPickerFooter;
