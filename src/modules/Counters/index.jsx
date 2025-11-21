"use client"

import CustomCard from '@/shared/Components/CustomCard'
import { MessageIcon } from '@/shared/components/Icons'
import Typography from '@/shared/components/Typography'
import { useRouter } from 'next/navigation'
import React from 'react'

const CounterLandingPage = () => {
  const router = useRouter();

  return (
    <div className="bg-white pb-20 pt-10 px-4 md:px-10 lg:px-20">
      {/* Heading */}
      <div className="mb-10 md:mb-20">
        <Typography
          text="Consulting Expertise That Drives Real Growth"
          variant="heading1"
          className="text-[#063231] font-bold text-2xl md:text-3xl lg:text-4xl"
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <CustomCard
          count="430+"
          label="Counters"
          TopIcon={MessageIcon}
          bottomText="view more counters"
          link="/counters"
        />

        <CustomCard
          count="1300"
          label="Products"
          TopIcon={MessageIcon}
          bottomText="View Products"
          onClick={() => console.log("Clicked")}
        />

        <CustomCard
          count="$7.8M"
          label="Happy Clients"
          TopIcon={MessageIcon}
          bottomText="See Client Testimonials"
          onClick={() => console.log("Clicked")}
        />

        <CustomCard
          count="$7.8M"
          label="Purpose"
          TopIcon={MessageIcon}
          bottomText="Learn More"
          onClick={() => console.log("Clicked")}
        />
      </div>
    </div>
  )
}

export default CounterLandingPage
