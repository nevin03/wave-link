"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DiagonalArrowIcon from "../Icons";
import Typography from "../Typography";

const CustomCard = ({
  count = "1000",
  label = "Completed Projects",
  TopIcon,
  bottomText = "View Details",
  link = "/details",
  className = "",
  duration = 1500,
}) => {
  const router = useRouter();
  const [displayCount, setDisplayCount] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  // Extract numeric value
  const numericValue = parseFloat(String(count).replace(/[^0-9.]/g, "")) || 0;

  // Prefix and suffix
  const prefix = count.match(/^[^\d]+/)?.[0] || "";
  const suffix = count.match(/[^\d]+$/)?.[0] || "";

  // Check if element is in viewport
  useEffect(() => {
    const handleScroll = () => {
      const card = document.getElementById(`custom-card-${label}`);
      if (!card) return;

      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.6) {
        setStartAnimation(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [label]);

  // Animate number
  useEffect(() => {
    if (!startAnimation) return;

    const end = numericValue;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = progress * end;

      setDisplayCount(value);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [startAnimation]);

  return (
    <div
    id={`custom-card-${label}`}
    className={`p-4 border rounded-xl bg-white shadow-sm w-full max-w-[250px] ${className}`} 
    >

      <Typography variant="heading3" className="text-black font-bold">
        {prefix}
        {Number(displayCount).toLocaleString(undefined, {
          maximumFractionDigits: 1,
        })}
        {suffix}
      </Typography>

      <div className="flex items-center justify-between mt-2">
        <Typography variant="content2" className="text-gray-700">
          {label}
        </Typography>
        {TopIcon && <TopIcon size={18} className="text-gray-600" />}
      </div>

      <div className="w-full border-b mt-3"></div>

      <button
        onClick={() => router.push(link)}
        className="mt-3 flex items-center gap-2 text-[#18A3B6] font-medium hover:underline"
      >
        {bottomText}
        <DiagonalArrowIcon size={16} className="text-[#18A3B6]" />
      </button>
    </div>
  );
};

export default CustomCard;
