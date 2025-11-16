import React from "react";

const Button = ({
  children,
  variant = "filled",
  size = "md",
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

  const sizeStyles = {
    xs: "px-3 py-1.5 text-xs",
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  const baseStyles =
    "font-semibold transition-all flex items-center justify-center";

  const disabledStyles = "opacity-50 cursor-not-allowed";

  const variantStyles = {
    filled: "bg-[#b85c2b] text-white border-2 border-[#b85c2b] hover:shadow-orange-500/50 transition-all duration-300 font-semibold hover:scale-105",
    outline: "bg-transparent text-[#b85c2b] border-2 border-[#b85c2b] hover:shadow-orange-500/50 transition-all duration-300 font-semibold hover:scale-105",
    orange: "bg-orange-400 text-black rounded-full font-semibold hover:bg-orange-500 transition-all duration-300 hover:scale-105 backdrop-blur-sm",
    "orange-outline":
      "border-2 border-orange-400/50 text-orange-400 rounded-full font-semibold hover:bg-orange-400 hover:text-black hover:border-orange-400 transition-all duration-300 hover:scale-105 backdrop-blur-sm",
  };

  return (
    <button
      disabled={loading || props.disabled}
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
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
