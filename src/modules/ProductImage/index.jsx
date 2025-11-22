"use client";

import React from "react";
import dynamic from "next/dynamic";
import Typography from "@/shared/components/Typography/index";
import Tabs from "@/shared/components/Tabs/index";
import { LoaderCircle } from "lucide-react";

const ElectronicDevicesTab = dynamic(
  () => import("./tabs-content/ElectronicDevicesTab"),
  {
    loading: () => (
      <div className="flex items-center justify-center h-64">
        <LoaderCircle className="h-8 w-8 text-gray-500 animate-spin" />
      </div>
    ),
  }
);

const RestaurantTab = dynamic(
  () => import("./tabs-content/RestaurantTab"),
  {
    loading: () => (
      <div className="flex items-center justify-center h-64">
        <LoaderCircle className="h-8 w-8 text-gray-500 animate-spin" />
      </div>
    ),
  }
);

const PetFoodTab = dynamic(
  () => import("./tabs-content/PetFoodTab"),
  {
    loading: () => (
      <div className="flex items-center justify-center h-64">
        <LoaderCircle className="h-8 w-8 text-gray-500 animate-spin" />
      </div>
    ),
  }
);

const SpicesTab = dynamic(
  () => import("./tabs-content/SpicesTab"),
  {
    loading: () => (
      <div className="flex items-center justify-center h-64">
        <LoaderCircle className="h-8 w-8 text-gray-500 animate-spin" />
      </div>
    ),
  }
);

const ProductImage = () => {
  const tabData = [
    {
      label: "Electronic Devices",
      content: <ElectronicDevicesTab />,
    },
    {
      label: "Restaurant",
      content: <RestaurantTab />,
    },
    {
      label: "Pet Food",
      content: <PetFoodTab />,
    },
    {
      label: "Spices",
      content: <SpicesTab />,
    },
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