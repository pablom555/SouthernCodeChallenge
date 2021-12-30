import React from "react";

const CardImage = ({ item }) => {
  return (
    <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
      <div className="relative w-56 h-56">
        <img
          data-testid="img"
          className="object-center object-cover w-full h-full"
          src={item.img_src}
          alt="photo"
        />
        <span className="absolute bottom-1 right-2 text-white font-bold">
          {item.id}
        </span>
      </div>
    </div>
  );
};

export default CardImage;
