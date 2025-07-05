import React from 'react';
import divyangImage from '../../assets/divyang.jpg'; // Adjust path based on your folder

const Divyang = () => {
  return (
    <>
   
   <div className="w-full bg-[#6a5f97] h-32 flex items-center justify-center">
  <h1 className="text-4xl font-bold text-white">Divyang</h1>
</div>

    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6">
      {/* Top Text */}
      <p className="text-lg font-medium text-gray-800 leading-relaxed">
        Focus on enrichment of language (LSRW) & mathematical skills for understanding & solving live problems.
      </p>

      {/* Project Banner */}
      <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-md shadow-sm">
        <div className="text-4xl text-red-700">♿</div>
        <div>
          <h2 className="text-2xl font-bold text-red-700">DIVYANGJAN</h2>
          <p className="text-base text-gray-700 font-medium">
            A Project of Swikar Charitable Trust
          </p>
        </div>
      </div>

      {/* Bullet Points */}
      <ul className="space-y-2 text-gray-900 text-base list-disc list-inside">
        <li>Educational Support & Inclusive Learning, with Vocational training programs</li>
        <li>Focusing on inclusion, accessibility, skill development, and emotional support</li>
        <li>Disability Therapy for Disabled Individuals</li>
      </ul>

      {/* Image */}
      <div className="w-full mt-4">
        <img
          src={divyangImage}
          alt="Children with different abilities engaged in inclusive learning"
          className="rounded-lg shadow-md w-full object-cover"
        />
      </div>
    </div>
     </>
  );
};

export default Divyang;
