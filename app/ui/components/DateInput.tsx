import React from "react";

const DateInput = ({
  value,
  placeholder,
  disabled,
  onChange
}: {
  value: string;
  placeholder: string;
  disabled: boolean;
  onChange?: any;
}) => {
  return (
    <input
      readOnly
      disabled={disabled}
      size={10}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default DateInput;
