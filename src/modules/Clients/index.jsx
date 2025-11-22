import React from "react";

const Clients = () => {
  const images = [
    "/persons/Group-17.png",
    "/persons/Group-18.png",
    "/persons/Group-21.png",
  ];

  return (
    <div className="w-full mb-20">
      {/* Mobile: Row scroll | Desktop: Grid */}
      <div
        className="
          flex gap-6 overflow-x-auto scrollbar-hide
          md:grid md:grid-cols-3 md:overflow-visible
        "
      >
        {images.map((img, idx) => (
          <div key={idx} className="min-w-[200px] md:min-w-0 overflow-hidden">
            <img
              src={img}
              alt={`client-${idx}`}
              className="w-full object-contain"
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Clients;
