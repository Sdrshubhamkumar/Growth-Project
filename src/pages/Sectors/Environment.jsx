import React from "react";
import environment from '../../assets/environment.jpg'; // Make sure the path is correct

export default function Environment() {
  return (
    <>
      {/* Header */}
      <div className="header pt-5 text-center h-25 w-full bg-[#6a5f97]">
        <h1 className="text-4xl font-bold text-white">Environment</h1>
      </div>

      {/* Card with 20px margin from top */}
      <div className="max-w-sm mx-auto mt-5 border-[6px] border-[#a63c2e] rounded-md overflow-hidden shadow-lg">
        {/* Top Section */}
        <div className="bg-white text-center py-4 px-2 border-b-[6px] border-[#a63c2e]">
          <div className="flex justify-center items-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-green-600 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C10 7 5 9 5 15s5 7 7 7 7-1 7-7-5-8-7-13z" />
            </svg>
            <h1 className="text-lg font-bold text-red-700 uppercase">Environment</h1>
          </div>
          <p className="text-black text-base italic">Sustain Nature, Thrive.</p>
        </div>

        {/* Image */}
        <img
          src={environment}
          alt="Environment Awareness"
          className="w-full object-cover"
        />

        {/* Bottom Message */}
        <div className="bg-[#a63c2e] text-white text-center px-4 py-3">
          <p className="text-sm font-medium">
            Awareness Campaigns on protecting natural resources, recycling of waste.
          </p>
        </div>
      </div>
    </>
  );
}
