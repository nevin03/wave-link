import React from "react";

const Button = ({
  children,
  variant = "filled",
  loading = false,
  loadingText = "Loading...",
  radius = "full", // <-- pill shape by default
  className = "",
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
    "px-6 py-3 font-semibold transition-all border-2 flex items-center justify-center";

  const filledStyles =
    "bg-[#b85c2b] text-white border-[#b85c2b] hover:bg-[#a04f26]";

  const outlineStyles =
    "bg-transparent text-[#b85c2b] border-[#b85c2b] hover:bg-[#b85c2b]/10";

  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button
      disabled={loading || props.disabled}
      className={`
        ${baseStyles}
        ${radiusStyles[radius]}
        ${variant === "filled" ? filledStyles : outlineStyles}
        ${loading || props.disabled ? disabledStyles : ""}
        ${className}
      `}
      {...props}
    >
      {loading ? loadingText : children}
    </button>
  );
};

export default Button;
