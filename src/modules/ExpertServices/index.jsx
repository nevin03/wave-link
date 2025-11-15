"use client";

import React from "react";
import Typography from "@/Shared/Components/Typography";
import ImageCard from "@/Shared/Components/ImageCard";
import Button from "@/Shared/Components/Button";

const ExpertServices = () => {
  const images = [
    "/chef-imgs.png",
    "/chef-imgs.png",
    "/chef-imgs.png",
    "/chef-imgs.png",
  ];

  return (
    <div className="bg-white relative">
      {/* Pill label */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg cursor-pointer hover:bg-gray-600 transition-colors">
          Expert Services
        </span>
      </div>
<Button variant="orange">
  Visit Website
</Button>

      <div className="max-w-6xl mx-auto text-center mt-6 mb-0">
        <Typography
          variant="heading2"
          text="Our Expert Services"
          className="text-black"
        />
      </div>

      {/* Images grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`flex ${
              idx % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <ImageCard
              image={img}
              title={`Service ${idx + 1}`}
              content={`Description for service ${idx + 1}`}
              height="300px"
              className="w-full md:w-full" // full width, no gaps
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertServices;
