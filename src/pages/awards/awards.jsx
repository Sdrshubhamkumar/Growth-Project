import React from 'react';
import ap from '../../assets/ap.jpg';

const Awards = () => {
  return (
    <div className="font-sans bg-white text-gray-800">
      
      <header
        className="relative h-80 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${ap})`,
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl font-bold text-white mb-2">
            Recognized for <span className="text-yellow-400">Creating Change</span>, One Life at a Time
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Over the years, Saath has been honored for its commitment to equity, empowerment, and inclusive development.
          </p>
        </div>
      </header>



      {/* Awards Cards */}
      <section className="py-12 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">Our Awards & Recognitions</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              year: '2023',
              title: 'UN-HABITAT Best Practices Award',
              desc: 'Recognized for innovative practices that significantly improved living conditions.',
            },
            {
              year: '2021',
              title: 'Global Award for Development',
              desc: 'Awarded for excellence in community upliftment and sustainable change.',
            },
            {
              year: '2020',
              title: 'Social Enterprise Excellence',
              desc: 'For demonstrating excellence in community-based entrepreneurship.',
            },
          ].map((award, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
            >
              <div className="text-sm text-indigo-600 font-medium">{award.year}</div>
              <h3 className="text-lg font-semibold text-indigo-900 mt-1">{award.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{award.desc}</p>
            </div>
          ))}
        </div>

        {/* Fourth card full width */}
        <div className="mt-6 max-w-md mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="text-sm text-indigo-600 font-medium">2022</div>
            <h3 className="text-lg font-semibold text-indigo-900 mt-1">Global Peace and Development Award</h3>
            <p className="text-sm text-gray-600 mt-2">
              Awarded for extraordinary impact in peace building and inclusive development.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-blue-50 py-10 px-4 text-center">
        <h2 className="text-xl font-bold text-blue-900 mb-6">Milestones & Recognitions Timeline</h2>
        <ul className="space-y-4 text-left max-w-lg mx-auto">
          {[
            ['1998', 'Saath launched, laying the foundation for inclusive urban development.'],
            ['2008', 'Received UN-HABITAT Best Practices Award.'],
            ['2011', 'Recognized by Social Enterprise Alliance for ethical social impact.'],
            ['2019', 'Awarded by the Social Return on Investment Network.'],
            ['2020', 'Social Accountability Award for Rural Empowerment.'],
            ['2022', 'Global Peace and Development Impact Award among a consortium of others.'],
          ].map(([year, text], i) => (
            <li key={i} className="relative pl-6 border-l-4 border-blue-500">
              <div className="absolute -left-3 top-1 w-4 h-4 bg-blue-700 rounded-full border-2 border-white shadow"></div>
              <div className="text-sm font-semibold text-blue-800">{year}</div>
              <p className="text-sm text-gray-700">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-xl font-semibold mb-4">Voices of Gratitude</h2>
        <blockquote className="italic text-gray-600 max-w-2xl mx-auto mb-6">
          "Each outreach validates the impact of actions they bring to community." – Meena, Community Member
        </blockquote>
        <div className="flex justify-center space-x-4">
          <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full">&larr;</button>
          <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full">&rarr;</button>
        </div>
      </section>

      {/* Footer Note */}
      <footer className="bg-indigo-800 text-white py-4 text-center rounded-t-lg">
        Every recognition is a reminder that our journey of creating lasting change continues. Thank you for being part of it.
      </footer>
    </div>
  );
};

export default Awards;
