"use client";

import React from "react";
import Typography from "@/shared/components/Typography";
import ImageCard from "@/shared/components/ImageCard";
import ConsultingExpertise from "./ConsultingExpertise";
import expertImages from "@/data/expertImages";
import ServicesVideo from "./ServicesVideo";

const ExpertServices = () => {
  return (
    <div className="bg-white relative py-5">
      <div className="relative flex flex-col items-center gap-4">
        <div className="bg-white border border-[#C6853F] px-6 py-2 rounded-full shadow-sm cursor-default">
          <Typography variant="content2" className="text-[#C6853F] font-semibold">
            What keeps us on Top
          </Typography>
        </div>

        <Typography
          variant="heading2"
          text="Our Expert Services"
          className="text-center mt-4 text-[#C6853F]"
        />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {expertImages.map((img, idx) => (
          <div
            key={idx}
            className={`flex ${idx % 2 === 0 ? "justify-start" : "justify-end"} rounded-2xl overflow-hidden`}
          >
            <ImageCard
              image={img.src}
              title={img.title}
              content={img.content}
              height="300px"
              className="w-full md:w-full"
            />
          </div>
        ))}
      </div>

      <ConsultingExpertise />
      <div className="bg-white"><ServicesVideo/></div>
    </div>
  );
};

export default ExpertServices;
