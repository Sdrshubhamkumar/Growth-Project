import React from 'react'
import image1 from '../../../src/assets/impact/img1.png'
import image2 from '../../../src/assets/impact/img2.png'
import image3 from '../../../src/assets/impact/img3.png'
import image4 from '../../../src/assets/impact/img4.png'

function impact() {
  return (
    <div>
      <div className="header pt-5 pb-5 text-center h-25 w-full bg-[#6a5f97]">
        <h1 className='text-4xl font-bold text-white'>Impact</h1>
      </div>
      <div className="text-container text-[#838383] p-10 pt-15">
        <p className="mb-4">
          Swikar Charitable Trust has been at the forefront of community transformation through targeted initiatives in education, healthcare, environment, disability inclusion, and livelihood development. Our programs are designed to reach the most underprivileged communities with sustainable, measurable solutions.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Key Focus Areas</h2>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Education:</strong> STEM labs, infrastructure improvements, and computer training for government schools.</li>
          <li><strong>Healthcare:</strong> Telemedicine, mobile clinics, and health camps offering free screenings and CPR training.</li>
          <li><strong>Livelihood:</strong> Skill development and micro-business support to place the right people in the right jobs.</li>
          <li><strong>Environment:</strong> Agroforestry, organic farming promotion, and zero-waste campaigns through recycling setups.</li>
          <li><strong>Disability Inclusion:</strong> Therapy programs, inclusive education, and emotional support for individuals with disabilities.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">By the Numbers</h2>
        <p className="mb-4">
          Our reach spans dozens of rural and urban communities across Karnataka. Through collaboration with corporations, government agencies, and volunteers, our programs have impacted thousands of lives by enhancing dignity, opportunity, and self-reliance.
        </p>
      </div>
      <div className="images grid grid-cols-1 gap-5 p-2 place-items-center sm:grid-cols-2 md:grid-cols-2">
        <img src={image1} alt="image" />
        <img src={image2} alt="image" />
        <img src={image3} alt="image" />
        <img src={image4} alt="image" />
      </div>
    </div>
  )
}

export default impact