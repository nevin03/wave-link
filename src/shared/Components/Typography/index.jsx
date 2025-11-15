import React from "react";

const Typography = ({
  variant = "content1",
  text = "",
  className = "",
  children,
  ...props
}) => {
  const styles = {
    heading1: "text-5xl font-bold leading-tight",
    heading2: "text-4xl font-semibold leading-snug",
    heading3: "text-3xl font-semibold leading-snug",

  
    title1: "text-2xl font-semibold leading-normal",
    title2: "text-xl font-medium leading-normal",
    title3: "text-lg font-medium leading-normal",

    content1: "text-lg font-normal leading-relaxed",
    content2: "text-base font-normal leading-relaxed",
    content3: "text-sm font-light leading-relaxed",
  };

  return (
    <p className={`${styles[variant]} ${className}`} {...props}>
      {text || children}
    </p>
  );
};

export default Typography;