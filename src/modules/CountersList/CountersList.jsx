'use client';

import Cards from "@/shared/Components/Cards";
import { countersData } from "./dummyCounters";

export default function CountersList() {
  return (
    <section className="py-16 bg-[#f9f9f5]"> {/* Light beige background */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Counters we offer</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Vistara, don’t just consult — collaborate, innovate, and deliver measurable impact. Our clients choose us because.
          </p>
        </div>

        {/* Grid of Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {countersData.map((counter) => (
            <div key={counter.id} className="text-center group">
              <Cards
                image={counter.image}
                height="300px"
                className="mx-auto" 
                bottomBox={{
                  title: counter.title,
                  description: counter.description
                }}
              />
              <button className="
                mt-2 inline-flex items-center gap-1 
                text-blue-600 hover:text-blue-800 font-medium 
                transition-colors duration-300
                group-hover:translate-x-1
              ">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}