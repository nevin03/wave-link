
export default function LandingImage({ imageUrl }) {
  return (
    <div className="relative lg:absolute lg:right-0 lg:w-[55%] lg:h-[600px]">
      {/* --- Stack Layer 1 (furthest back - left side) --- */}
      <div className="absolute -top-4 -left-8 w-full h-full rounded-3xl bg-gradient-to-tr from-[#212121]/30 to-[#212121]-900/30 backdrop-blur-sm border border-gray-700/20" />

      {/* --- Stack Layer 2 (middle - left side) --- */}
      <div className="absolute -top-2 -left-4 w-full h-full rounded-3xl bg-gradient-to-tr from-[#404040]/40 to-[#404040]-900/40 backdrop-blur-sm border border-gray-800/40" />

      {/* --- Main Image Container (front) --- */}
      <div
        className="
          relative w-full h-[500px] lg:h-full 
          overflow-hidden shadow-2xl border border-gray-700/50
          rounded-[24px_0_0_24px]
        "
      >
        <img
          src={imageUrl}
          alt="Modern Office"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/20"></div>
      </div>
    </div>
  );
}