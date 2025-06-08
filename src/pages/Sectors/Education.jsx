import React from "react";
import ay from '../../assets/ay.jpg';

export default function Education() {
  return (
    <>
      <div className="header pt-5 text-center h-25 w-full bg-[#6a5f97]">
        <h1 className="text-4xl font-bold text-white">Education</h1>
      </div>

      <div className="bg-gray-100 min-h-screen p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center mb-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Education Icon"
              className="w-12 h-12 mr-4"
            />
            <div>
              <h1 className="text-2xl font-bold text-red-700">EDUCATION</h1>
              <p className="text-gray-600 text-sm">Curiosity Drives Learning.</p>
            </div>
          </div>

          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Make a roadmap for the gap of education system through serving.
          </h2>

          <div className="space-y-6">
            <img
              src={ay}
              alt="Educational Scenes"
              className="w-full rounded-xl shadow"
            />

            <div className="bg-teal-900 text-white rounded-xl p-4">
              <h3 className="font-bold text-lg mb-2">
                VIDYANJALI PROJECT
              </h3>
              <p className="font-semibold">
                GOVERNMENT SCHOOL DEVELOPMENT & SERVICES
              </p>
              <p className="mt-2 text-sm">
                STEM LAB establishment for Practical Classes, train children with computer trainer through activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
