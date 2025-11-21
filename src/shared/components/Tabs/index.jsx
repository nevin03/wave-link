"use client";

import React, { useState } from "react";

const Tabs = ({ tabs = [] }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex justify-center">
        <div className="flex gap-6 border-b border-gray-300">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`py-2 px-4 font-medium transition-colors ${
                activeTab === index
                  ? "border-b-2 border-gray-900 text-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">{tabs[activeTab]?.content}</div>
    </div>
  );
};

export default Tabs;
