import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-12 h-12 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gray-800 rounded-full border-2 border-gray-800"></div>
      </div>
    </div>
  );
};

export default Spinner;
