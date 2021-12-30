import React from "react";

const Title = ({ text }) => {
  return (
    <div className="text-center pb-12">
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
        {text}
      </h1>
    </div>
  );
};

export default Title;
