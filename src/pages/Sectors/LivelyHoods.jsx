import React from "react";

export default function LivelyHood() {
  return (
    <>
    
      <div className="header pt-5 text-center h-25 w-full bg-[#6a5f97]">
        <h1 className="text-4xl font-bold text-white">LivelyHood</h1>
      </div>

    <div className="bg-white text-black p-8 space-y-6 font-sans max-w-2xl mx-auto rounded-2xl shadow-lg">
      <div className="bg-red-100 p-4 rounded-lg flex items-center space-x-4">
        <div className="text-red-600 text-3xl">🏛️</div>
        <div>
          <h2 className="text-red-700 font-bold text-xl">LIVELIHOOD</h2>
          <p className="text-gray-700">Building Brighter Futures.</p>
        </div>
      </div>

      <div>
        <p className="text-lg">
          Establish Micro Business Firms near communities.
        </p>
      </div>

      <div>
        <p className="text-lg">
          Place right candidate to right job through Skill development program.
        </p>
      </div>

      <div>
        <p className="text-lg">
          Provide Internship for final year college students in Industries
          <br />
          Conduct needs based awareness Campaigns regularly
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-red-700">Growth Sectors</h3>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-pink-200 text-red-700 font-bold p-4 rounded-md text-center">KNOWLEDGE PARTNER</div>
          <div className="bg-green-200 text-yellow-900 font-bold p-4 rounded-md text-center">CORPORATE</div>
          <div className="bg-yellow-300 text-red-800 font-bold p-4 rounded-md text-center">GOVERNMENT</div>
          <div className="bg-blue-400 text-white font-bold p-4 rounded-md text-center">COLLEGE</div>
        </div>
      </div>
    </div>
     </>
  );
}