import React from 'react';
import Typography from '@/shared/components/Typography/index';

export default function Counters() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/resturatent.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Dark Overlay/Shade */}
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 flex flex-col items-start justify-end min-h-screen px-8 md:px-16 lg:px-24 pb-16 md:pb-20">
        <Typography variant="heading1" className="text-white mb-4">
          Counters
        </Typography>
        <Typography
          variant="content2"
          className="text-white/90 max-w-2xl leading-relaxed"
        >
          At Vistara, we don just consult — we collaborate, innovate, and deliver
          <br />
          measurable impact. Our clients choose us because.
        </Typography>
      </div>
    </div>
  );
}