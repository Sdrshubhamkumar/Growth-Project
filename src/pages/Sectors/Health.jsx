import React from "react";
import ay2 from '../../assets/ay2.jpg';

export default function HealthEnvironmentCard() {
  {document.title = "Health | Swikar Charitable"}
  return ( 
    <>
      {/* Header */}
      <div className="header pt-5 text-center h-25 w-full bg-[#6a5f97]">
        <h1 className="text-4xl font-bold text-white">Health</h1>
      </div>

      {/* Card with margin from header */}
      <div className="mt-5 bg-teal-900 text-white p-8 space-y-6 font-sans max-w-2xl mx-auto rounded-2xl shadow-lg">
        <div>
          <p className="text-lg">
            Agroforestry implementation in farmer's land with carbon credit
            benefit for farmers, motivating farmers to organic farming.
          </p>
        </div>

        <img
          src={ay2}
          alt="Health"
          className="w-full rounded-xl shadow"
        />

        <div>
          <p className="text-lg">
            Set up of Plastic, Paper recycling plant near slum areas and rural
            areas to maintain ZERO Plastic, printed papers circulation on
            environment.
          </p>
        </div>

        <div className="bg-white text-black rounded-lg p-4 flex items-center space-x-4">
          <div className="text-red-600 text-2xl">❤️</div>
          <div>
            <h2 className="text-red-700 font-bold text-xl">HEALTH</h2>
            <p className="text-gray-700">Help Yourself to Stay Healthy</p>
          </div>
        </div>

        <div>
          <p className="text-lg">
            Tele-medicine service, mobile health clinics for rural and slum areas.
          </p>
        </div>

        <div>
          <p className="text-lg">
            Community Health Camps with free general checkups, Doctor Consultation,
            screening.
          </p>
        </div>

        <div>
          <p className="text-lg">
            Women and Child Health Programs Emergency and Disaster relief Health
            Programs with CPR demo, distributing health kits.
          </p>
        </div>
      </div>
    </>
  );
}
