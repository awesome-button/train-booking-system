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
      type="text"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none"
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
