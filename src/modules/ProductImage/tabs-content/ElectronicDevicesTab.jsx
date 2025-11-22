import React from "react";
import Cards from "@/shared/components/Cards/index";
import { ArrowIcon } from "@/shared/components/Icons/index";

const cardImages = ["/air-treatment.png", "/iphone.png", "/samsung.png"];

const ElectronicDevicesTab = () => {
  return (
    <div className="relative w-full mt-6 mb-24">
      {/* Left Arrow - Desktop Only */}
      <div className="hidden md:flex absolute left-10 top-1/2 -translate-y-1/2 z-10 cursor-pointer hover:text-gray-900 transition">
        <ArrowIcon className="rotate-180 w-8 h-8 text-gray-700" />
      </div>

      {/* Scrollable Cards */}
      <div
        className="
          flex items-center gap-6 px-4
          overflow-x-auto scrollbar-hide
          snap-x snap-mandatory
          md:overflow-visible md:justify-center
        "
      >
        <div className="snap-center shrink-0">
          <Cards
            image={cardImages[0]}
            className="w-64 sm:w-60 md:w-64"
            height="260px"
            bottomBox={{
              title: "Dyson Air Treatment Pro II",
              description: "Air Treatment | Dyson® Official Website",
            }}
          />
        </div>

        <div className="snap-center shrink-0">
          <Cards
            image="/iphone.png"
            className="w-64 sm:w-60 md:w-64"
            height="260px"
            bottomBox={{
              title: "iPhone 17 Pro",
              description: "Buy iPhone 17 Pro and iPhone 17 Pro Max - Apple (IN)",
            }}
          />
        </div>

        <div className="snap-center shrink-0">
          <Cards
            image={cardImages[2]}
            className="w-64 sm:w-60 md:w-64"
            height="260px"
            bottomBox={{
              title: "Samsung S22+",
              description: "Explore New Samsung Galaxy Mobiles Online | Samsung India",
            }}
          />
        </div>
      </div>

      {/* Right Arrow - Desktop Only */}
      <div className="hidden md:flex absolute right-10 top-1/2 -translate-y-1/2 z-10 cursor-pointer hover:text-gray-900 transition">
        <ArrowIcon className="w-8 h-8 text-gray-700" />
      </div>
    </div>
  );
};

export default ElectronicDevicesTab;