import React from "react";

const Typography = ({
  variant = "content1",
  text = "",
  className = "",
  children,
  ...props
}) => {
  const styles = {
    // Headings
    heading1: "text-5xl font-bold text-white leading-tight",
    heading2: "text-4xl font-semibold text-white leading-snug",
    heading3: "text-3xl font-semibold text-white leading-snug",

    // Titles
    title1: "text-2xl font-semibold text-white leading-normal",
    title2: "text-xl font-medium text-white leading-normal",
    title3: "text-lg font-medium text-white leading-normal",

    // Content / Paragraph
    content1: "text-lg font-normal text-white/90 leading-relaxed",
    content2: "text-base font-normal text-white/90 leading-relaxed",
    content3: "text-sm font-light text-white/80 leading-relaxed",
  };

  return (
    <p className={`${styles[variant]} ${className}`} {...props}>
      {text || children}
    </p>
  );
};

export default Typography;
