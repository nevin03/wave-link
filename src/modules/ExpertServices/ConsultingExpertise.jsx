import React from "react";
import Typography from "@/shared/components/Typography";
import Cards from "@/shared/components/Cards";
import { TickIcon, PlusIcon } from "@/shared/components/Icons";

const ConsultingExpertise = () => {
  return (
    <div className="bg-[#FFF8ED] mt-12 md:mt-16 py-12 md:py-16 p-5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8 px-4 sm:px-6">
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <Typography
            variant="heading2"
            className="text-gray-900 leading-snug text-3xl sm:text-4xl lg:text-5xl"
          >
            Consulting Expertise
            <br />
            That Drives Real Growth
          </Typography>

          <Typography
            variant="content1"
            className="text-gray-800 text-base sm:text-lg"
          >
            At Vistara, we don’t just consult — we collaborate, innovate, and
            deliver measurable impact. Our clients choose us because.
          </Typography>

          <div className="relative flex items-start gap-2 mt-6">
            <TickIcon width={24} height={24} />
            <Typography
              variant="heading3"
              className="text-gray-900 text-xl sm:text-2xl mt-0.5"
            >
              Mission
            </Typography>
            <PlusIcon
              width={20}
              height={20}
              className="absolute right-0 top-0"
            />
          </div>

          <Typography
            variant="content3"
            className="text-gray-800 mt-1 pl-7"
          >
            Our Mission is to empower frontline professionals with advanced thermal vision technology and high-definition imaging solutions. As we look to the future, we are committed to expanding our product range to include cutting-edge thermal cameras for drones and other critical applications, ensuring our customers can effectively protect and serve their communities in any environment.
          </Typography>

          <div className="relative flex items-start gap-2 mt-6">
            <TickIcon width={24} height={24} />
            <Typography
              variant="heading3"
              className="text-gray-900 text-xl sm:text-2xl mt-0.5"
            >
              Vision
            </Typography>
            <PlusIcon
              width={20}
              height={20}
              className="absolute right-0 top-0"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-start">
          <Cards
            image="/consulting-exp-image.png"
            height="250px sm:300px lg:350px"
            className="w-full sm:w-4/5 lg:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ConsultingExpertise;
