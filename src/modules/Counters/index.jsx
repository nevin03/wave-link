"use client"

import CustomCard from '@/shared/Components/CustomCard'
import { MessageIcon } from '@/shared/components/Icons'
import Typography from '@/shared/components/Typography'
import { useRouter } from 'next/navigation'
import React from 'react'

const CounterLandingPage = () => {
  const router = useRouter();

  return (
    <div className="bg-white pb-30 pt-10 pl-20 pr-10">
      {/* Heading */}
      <div className="mb-20">
        <Typography
          text="Consulting Expertise That Drives Real Growth"
          variant="heading1"
          className="text-[#063231] font-bold"
        />
      </div>

      {/* Cards */}
      <div className="flex gap-6 flex-wrap justify-between">
        <CustomCard
        count="430+"
        label="Active Clients"
        TopIcon={MessageIcon}
        bottomText="Explore"
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
          bottomText="View Testimonials"
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
