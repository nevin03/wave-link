"use client";

import CustomCard from "@/shared/components/CustomCard";
import { MessageIcon } from "@/shared/components/Icons";
import Typography from "@/shared/components/Typography";
import { useRouter } from "next/navigation";
import React from "react";

const CounterLandingPage = () => {
  const router = useRouter();

  return (
    <div className="bg-white pb-30 pt-10 pl-6 md:pl-20 pr-6 md:pr-10">
      {/* Heading */}
      <div className="mb-10 md:mb-20">
        <Typography
          text="Consulting Expertise That Drives Real Growth"
          variant="heading1"
          className="text-[#063231] font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight"
        />
      </div>

      {/* Cards — mobile: horizontal scroll snap, md+: wrapped grid */}
      <div className="w-full">
        {/* Scroll wrapper: enables swipe on small screens, disables on md+ */}
        <div
          className="
            overflow-x-auto md:overflow-visible
            -mx-6 px-6 md:px-0
            scrollbar-hide
            snap-x snap-mandatory
          "
        >
          {/* Inner flex holds items — on md+ it will wrap & justify-between */}
          <div className="flex gap-6 md:flex-wrap md:justify-between">
            {/* Card 1 */}
            <div className="snap-center shrink-0 w-[85%] sm:w-[48%] md:w-[23%]">
              <CustomCard
                count="430+"
                label="Counters"
                TopIcon={MessageIcon}
                bottomText="view more counters"
                link="/counters"
              />
            </div>

            {/* Card 2 */}
            <div className="snap-center shrink-0 w-[85%] sm:w-[48%] md:w-[23%]">
              <CustomCard
                count="1300"
                label="Products"
                TopIcon={MessageIcon}
                bottomText="View Products"
                onClick={() => console.log("Clicked")}
              />
            </div>

            {/* Card 3 */}
            <div className="snap-center shrink-0 w-[85%] sm:w-[48%] md:w-[23%]">
              <CustomCard
                count="$7.8M"
                label="Happy Clients"
                TopIcon={MessageIcon}
                bottomText="See Client Testimonials"
                onClick={() => console.log("Clicked")}
              />
            </div>

            {/* Card 4 */}
            <div className="snap-center shrink-0 w-[85%] sm:w-[48%] md:w-[23%]">
              <CustomCard
                count="$7.8M"
                label="Purpose"
                TopIcon={MessageIcon}
                bottomText="Learn More"
                onClick={() => console.log("Clicked")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterLandingPage;
