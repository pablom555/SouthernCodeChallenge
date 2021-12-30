import React from "react";

const InputCustom = ({ type, text, value, setValue }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-bold text-white pl-1" htmlFor="rover">
        {text}:
      </label>
      <input
        className="text-xl rounded border-2 border-gray-700 text-gray-600 h-10 w-60 pl-2 bg-white"
        type={type}
        min={type === "number" ? 0 : null}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default InputCustom;
