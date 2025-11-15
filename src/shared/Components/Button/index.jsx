import React from "react";

const Button = ({
  children,
  variant = "filled",
  loading = false,
  loadingText = "Loading...",
  radius = "full",
  ...props
}) => {
  const radiusStyles = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  const baseStyles =
    "px-6 py-3 font-semibold transition-all flex items-center justify-center"; // no border here

  const disabledStyles = "opacity-50 cursor-not-allowed";

  // Define variants
  const variantStyles = {
    filled: "bg-[#b85c2b] text-white border-2 border-[#b85c2b] hover:bg-[#a04f26]",
    outline: "bg-transparent text-[#b85c2b] border-2 border-[#b85c2b] hover:bg-[#b85c2b]/10",
    orange: "bg-orange-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-orange-500 transition-all duration-300 hover:scale-105 backdrop-blur-sm",
    "orange-outline":
      "border-2 border-orange-400/50 text-orange-400 px-8 py-3 rounded-full font-semibold hover:bg-orange-400 hover:text-black hover:border-orange-400 transition-all duration-300 hover:scale-105 backdrop-blur-sm",
  };

  return (
    <button
      disabled={loading || props.disabled}
      className={`
        ${baseStyles}
        ${radiusStyles[radius]}
        ${variantStyles[variant]}
        ${loading || props.disabled ? disabledStyles : ""}
      `}
      {...props}
    >
      {loading ? loadingText : children}
    </button>
  );
};

export default Button;
