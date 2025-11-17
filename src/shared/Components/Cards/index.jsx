import React from "react";
import DiagonalArrowIcon from "../Icons";

const Cards = ({
  image,
  className = "",
  height = "300px",
  bottomBox = null,
  showLearnMore = false,
  onLearnMore = null,
  cardStyle = "default", // "default" or "counter-list"
}) => {
  return (
    <div className={`relative ${className}`}>
      <div
        className={`relative rounded-xl overflow-visible ${
          cardStyle === "counter-list" ? "border-0" : "border-4 border-[#dad9d4]"
        }`}
        style={{ height }}
      >
        <img
          src={image}
          alt="Card Image"
          className="w-full h-full object-cover rounded-xl"
        />

        {bottomBox && cardStyle === "default" && (
          <div className="
            absolute left-1/2 -translate-x-1/2 
            bottom-[-45px]
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

      {bottomBox && cardStyle === "counter-list" && (
        <div className="mt-4">
          <h3 className="font-bold text-gray-900 text-lg mb-2">
            {bottomBox.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            {bottomBox.description}
          </p>
          <hr className="border-gray-400 mb-1" />
          {showLearnMore && (
            <button
              onClick={onLearnMore}
              className="
                inline-flex items-center gap-1.5
                text-[#0EA5E9] hover:text-[#0284C7]
                font-medium text-sm
                transition-all duration-300
                hover:gap-2.5
              "
            >
              View in map
              <DiagonalArrowIcon
                size={14}
                stroke="#0EA5E9"
                className="transition-colors duration-300 group-hover:stroke-[#0284C7]"
              />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Cards;