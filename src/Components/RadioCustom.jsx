import React from "react";

const RadioCustom = ({ text, value, onChange }) => {
  return (
    <label className="inline-flex items-center mt-1 cursor-pointer">
      <input
        type="radio"
        className="form-check-input appearance-none rounded-full h-4 w-4 border-2 border-orange-300 bg-gray-800 checked:bg-orange-400 checked:border-orange-300 focus:outline-none transition duration-200 cursor-pointer"
        checked={value}
        onChange={() => onChange(!value)}
      />

      <span className="ml-2 font-bold text-white">{text}</span>
    </label>
  );
};

export default RadioCustom;
