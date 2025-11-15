"use client";

import TextHeading from "@/components/TextHeading/TextHeading";
import Button from "@/Shared/Components/Button";
import LandingImage from "@/components/LandingImage/LandingImage";

export default function Hero() {
  const heroImageUrl = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80";

  return (
    <div
      className="min-h-[calc(100vh-72px)] 
      bg-[radial-gradient(800px_at_bottom_left,#2C1F05,rgba(0,0,0,0.95))]
      text-white flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 z-10">
          <div className="inline-block bg-gray-800/50 text-gray-300 px-4 py-2 rounded-full text-sm backdrop-blur-sm border border-gray-700">
            Welcome to Business X
          </div>

          <TextHeading
            text={
              <>
                Join us in growing
                <br />
                your business
              </>
            }
            size="lg"
            isAnimation={true}
          />

          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            Elevate your business with Businezz X, a professional Webflow
            template.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <Button
              loading={false}
              loadingText="Loading..."
              radius="full"
              variant="orange"
            >
              Free Consultation
            </Button>
            <Button
              variant="orange-outline"
              loading={false}
              loadingText="Loading..."
              radius="full"
            >
              Get in touch
            </Button>
          </div>
        </div>
        {/* Right Image */}
        <LandingImage imageUrl={heroImageUrl} />
      </div>

      <style jsx>{`
        @keyframes glow {
          0%,
          100% {
            filter: drop-shadow(0 0 20px rgba(251, 146, 60, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 30px rgba(251, 146, 60, 0.8));
          }
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}