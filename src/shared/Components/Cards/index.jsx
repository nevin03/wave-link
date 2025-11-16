import React from "react";

const Cards = ({
  image,
  className = "",
  height = "300px",
  bottomBox = null,
}) => {
  return (
    <div
      className={`relative rounded-xl overflow-visible border-4 border-[#dad9d4] ${className}`}
      style={{ height }}
    >
      <img
        src={image}
        alt="Card Image"
        className="w-full h-full object-cover rounded-xl"
      />

      {bottomBox && (
        <div className="
          absolute left-1/2 -translate-x-1/2 
          bottom-[-45px]   /* shows fully outside */
          bg-white rounded-2xl px-6 py-4
          text-center shadow-lg
          w-[85%]
        ">
          <div className="font-semibold text-gray-900 text-lg">
            {bottomBox.title}
          </div>
          {bottomBox.description && (
            <div className="text-gray-700 text-sm mt-1">
              {bottomBox.description}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cards;
