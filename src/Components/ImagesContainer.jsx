import React from "react";
import CardImage from "./CardImage";

const ImagesContainer = ({ data }) => {
  console.log("data", data.length);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-12">
      {data.map((item) => (
        <CardImage key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ImagesContainer;
