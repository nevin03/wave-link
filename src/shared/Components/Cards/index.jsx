import React from "react";

const Cards = ({ image, className = "", height = "300px" }) => {
  return (
    <div
      className={`overflow-hidden rounded-xl ${className}`}
      style={{ height }}
    >
      <img
        src={image}
        alt="Rounded Card"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Cards;
