"use client";

import React from "react";
import Typography from "@/shared/components/Typography";
import Cards from "@/shared/components/Cards";
import { ArrowIcon } from "@/shared/components/Icons";
import Tabs from "@/shared/components/Tabs";

const cardImages = ["/air-treatment.png", "/iphone.png", "/samsung.png"];

const ProductImage = () => {
  const tabData = [
    {
      label: "Electronic Devices",
      content: (
        <div className="relative flex items-center justify-center w-full mt-6 mb-20 md:mb-40">
          {/* Left Arrow - Hidden on mobile */}
          <div className="hidden md:block absolute left-4 lg:left-20 z-10 cursor-pointer">
            <ArrowIcon className="rotate-180 w-8 h-8 text-gray-700" />
          </div>

          {/* Cards Container - Horizontal scroll on mobile, flex on desktop */}
          <div className="flex items-center justify-start md:justify-center gap-4 md:gap-6 w-full px-4 overflow-x-auto md:overflow-visible scrollbar-hide">
            <Cards
              image={cardImages[0]}
              className="w-48 sm:w-56 md:w-64 flex-shrink-0"
              height="250px"
              bottomBox={{
                title: "Dyson Air Treatment Pro II",
                description: "Air Treatment | Dyson® Official Website",
              }}
            />

            <Cards
              image="/iphone.png"
              className="w-48 sm:w-56 md:w-64 flex-shrink-0"
              height="320px"
              bottomBox={{
                title: "iPhone 17 Pro",
                description: "Buy iPhone 17 Pro and iPhone 17 Pro Max - Apple (IN)",
              }}
            />

            <Cards
              image={cardImages[2]}
              className="w-48 sm:w-56 md:w-64 flex-shrink-0"
              height="250px"
              bottomBox={{
                title: "Samsung S22+",
                description: "Explore New Samsung Galaxy Mobiles Online | Samsung India",
              }}
            />
          </div>

          {/* Right Arrow - Hidden on mobile */}
          <div className="hidden md:block absolute right-4 lg:right-20 z-10 cursor-pointer">
            <ArrowIcon className="w-8 h-8 text-gray-700" />
          </div>
        </div>
      ),
    },

    { label: "Restaurant", content: <div className="mt-6">Restaurant Content</div> },
    { label: "Pet Food", content: <div className="mt-6">Pet Food Content</div> },
    { label: "Spices", content: <div className="mt-6">Spices Content</div> },
  ];

  return (
    <div className="relative flex flex-col items-center gap-4 bg-white py-10">
      <div className="border border-[#C6853F] px-6 py-2 rounded-full shadow-sm">
        <Typography variant="content2" className="text-[#C6853F] font-semibold">
          What keeps us on Top
        </Typography>
      </div>

      <Typography
        variant="heading2"
        text="Our Expert Services"
        className="text-center mt-4 text-[#C6853F]"
      />

      <div className="w-full mt-10">
        <Tabs tabs={tabData} />
      </div>
    </div>
  );
};

export default ProductImage;
