import React from "react";
import DateInput from "../primitives/DateInput";

type DayPickerFooter = {
  departureDate: { value: string; disabled: boolean; placeholder: string };
  returnDate: { value: string; disabled: boolean; placeholder: string };
};

const DayPickerFooter = ({ departureDate, returnDate }: DayPickerFooter) => {
  return (
    <div>
      <DateInput
        disabled={departureDate.disabled}
        placeholder={departureDate.placeholder}
        value={departureDate.value}
      />
      {" – "}
      <DateInput
        disabled={returnDate.disabled}
        placeholder={returnDate.placeholder}
        value={returnDate.value}
      />
    </div>
  );
};

export default DayPickerFooter;
