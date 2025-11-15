'use client';

import './TextHeading.css';

export default function TextHeading({ text, size = 'lg', isAnimation = false }) {
  const sizeClasses = {
    sm: 'text-2xl md:text-3xl lg:text-2xl',
    md: 'text-3xl md:text-4xl lg:text-3xl',
    lg: 'text-5xl md:text-6xl lg:text-5xl',
  };

  const animationClass = isAnimation ? 'animate-glow-float' : 'animate-glow';

  return (
    <h1 className={`${sizeClasses[size] || sizeClasses.lg} font-bold leading-tight`}>
      <span
        className={`
          bg-gradient-to-r from-orange-400 via-amber-500 to-orange-400 
          bg-clip-text text-transparent 
          ${animationClass}
        `}
      >
        {text}
      </span>
    </h1>
  );
}