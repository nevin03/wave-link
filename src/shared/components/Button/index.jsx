import React from "react";

const Button = ({
  children,
  variant = "filled",
  size = "md",
  loading = false,
  loadingText = "Loading...",
  radius = "full",
  fullWidthOnMobile = false, // NEW: make button full width on small screens
  className = "", // allow passing custom classes
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

  // responsive size styles: compact on mobile, roomy on sm+ screens
  const sizeStyles = {
    xs: "px-3 py-1.5 text-xs sm:px-3 sm:py-1.5",
    sm: "px-3 py-1.5 text-sm sm:px-4 sm:py-2",
    md: "px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base",
    lg: "px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg",
    xl: "px-8 py-4 text-lg sm:px-10 sm:py-5 sm:text-xl",
  };

  const baseStyles =
    "font-semibold transition-all inline-flex items-center justify-center gap-2 select-none";

  const disabledStyles = "opacity-50 cursor-not-allowed pointer-events-none";

  const variantStyles = {
    filled:
      "bg-[#b85c2b] text-white border-2 border-[#b85c2b] hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105",
    outline:
      "bg-transparent text-[#b85c2b] border-2 border-[#b85c2b] hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105",
    orange:
      "bg-orange-400 text-black hover:bg-orange-500 transition-all duration-300 hover:scale-105 backdrop-blur-sm",
    "orange-outline":
      "border-2 border-orange-400/50 text-orange-400 hover:bg-orange-400 hover:text-black hover:border-orange-400 transition-all duration-300 hover:scale-105 backdrop-blur-sm",
  };

  // optional mobile full width class
  const mobileWidth = fullWidthOnMobile ? "w-full sm:w-auto" : "w-auto";

  return (
    <button
      type={props.type || "button"}
      disabled={loading || props.disabled}
      aria-busy={loading || undefined}
      aria-disabled={loading || props.disabled || undefined}
      className={[
        baseStyles,
        sizeStyles[size] || sizeStyles.md,
        radiusStyles[radius] || radiusStyles.full,
        variantStyles[variant] || variantStyles.filled,
        mobileWidth,
        loading || props.disabled ? disabledStyles : "",
        className, // allow external classes to override/augment
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {loading ? (
        <>
          {/* Small spinner (Tailwind provides animate-spin) */}
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          <span>{loadingText}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
