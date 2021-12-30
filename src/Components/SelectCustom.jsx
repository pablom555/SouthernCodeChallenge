import React from "react";

const SelectCustom = ({ label, options, value, setValue }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-bold text-white pl-1" htmlFor="rover">
        {label}:
      </label>
      <select
        name="rover"
        id="rover"
        className="text-xl rounded border-2 border-gray-700 text-gray-600 h-10 w-60 pl-2 bg-white hover:border-gray-400 focus:outline-none indent-0"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCustom;
