'use client';

import Cards from "@/shared/components/Cards";
import Typography from "@/shared/components/Typography";
import { countersData } from "./dummyCounters";

export default function CountersList() {
  const handleLearnMore = (counterId) => {
    console.log(`Learn more clicked for counter ${counterId}`);
    // Add navigation or modal logic here
  };

  return (
    <section className="py-16 bg-[#f9f9f5]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <Typography
            variant="heading2"
            className="text-gray-900 mb-4"
          >
            Counters we offer
          </Typography>

          <Typography
            variant="content2"
            className="text-gray-600 max-w-2xl"
          >
            At Vistara, we don’t just consult — we collaborate, innovate, and deliver 
            measurable impact. Our clients choose us because.
          </Typography>
        </div>

        {/* Grid of Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {countersData.map((counter) => (
            <div key={counter.id} className="group">
              <Cards
                image={counter.image}
                height="280px"
                cardStyle="counter-list"
                showLearnMore={true}
                onLearnMore={() => handleLearnMore(counter.id)}
                bottomBox={{
                  title: counter.title,
                  description: counter.description
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}