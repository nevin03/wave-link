"use client";

import React, { useState } from "react";
import { PlayButton } from "@/shared/components/Icons/index";

const ServicesVideo = ({ src = "/videos/meeting-video.mp4" }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full mb-20">
      <video
        src={src}
        muted
        loop
        playsInline
        className="w-full h-[60vh] object-cover"
        onClick={(e) => {
          if (isPlaying) {
            e.target.pause();
            setIsPlaying(false);
          } else {
            e.target.play();
            setIsPlaying(true);
          }
        }}
      />

      {!isPlaying && (
        <button
          className="absolute inset-0 flex items-center justify-center z-10"
          onClick={(e) => {
            const video = e.currentTarget.previousSibling;
            video.play();
            setIsPlaying(true);
          }}
        >
          <PlayButton
            width={120}
            height={120}
          />
        </button>
      )}
    </div>
  );
};

export default ServicesVideo;
