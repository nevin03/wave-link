import React from "react";

const Clients = () => {
  const images = [
    "/persons/Group-17.png",
    "/persons/Group-18.png",
    "/persons/Group-21.png",
  ];

  return (
    <div className="w-full mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {images.map((img, idx) => (
          <div key={idx} className="w-full overflow-hidden">
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
