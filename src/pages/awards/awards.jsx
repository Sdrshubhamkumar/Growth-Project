import { useState } from 'react';

const Awards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      text: "Saath's awards validate the hope and future they bring to our community.",
      author: "— Meena, Community Member",
    },
    {
      text: "Each recognition strengthens our resolve to empower more women and children.",
      author: "— Rakesh, Saath Team Member",
    },
    {
      text: "I am proud to support an organization whose impact is seen and celebrated worldwide.",
      author: "— Priya, Donor",
    },
  ];

  const next = () => setCurrentIndex((currentIndex + 1) % testimonials.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="font-sans text-gray-800 bg-[#fefefe]">
      {/* Hero Section */}
      <header className="relative bg-cover bg-center h-[320px] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url('https://images.squarespace-cdn.com/content/v1/60ed073a33b5634c776f8355/dd825e7e-dd77-495b-a9a5-ee4a89d319bc/AdobeStock_383109571.jpeg?format=2500w')` }}>
        <div className="absolute inset-0 bg-green bg-opacity-60 z-0"></div>
        <div className="relative z-10 px-5 max-w-3xl">
          <h1 className="text-4xl font-bold mb-2">
            Recognized for <span className="text-yellow-400">Creating Change</span>, One Life at a Time
          </h1>
          <p className="text-lg font-light">
            Over the years, Saath has been honored for its commitment to equity, empowerment, and inclusive development.
          </p>
        </div>
      </header>

      {/* Awards Grid */}
      <section className="max-w-6xl mx-auto py-10 px-5">
        <h2 className="text-2xl font-semibold text-center text-[#2c3e50] mb-8">Our Awards & Recognitions</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/UN-HABITAT_logo.svg/1024px-UN-HABITAT_logo.svg.png',
              title: 'UN-HABITAT Best Practices Award',
              year: '2006',
              desc: 'Recognized for best practices in urban housing and slum redevelopment.',
            },
            {
              img: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Social_Enterprise_Alliance_Logo.png',
              title: 'Social Enterprise Excellence',
              year: '2015',
              desc: 'Honored for innovative solutions in community development and sustainability.',
            },
            {
              img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Skoll_Foundation_Logo.png/600px-Skoll_Foundation_Logo.png',
              title: 'Skoll Award for Social Entrepreneurship',
              year: '2018',
              desc: 'Recognized globally for social innovation and impactful entrepreneurship.',
            },
            {
              img: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Nobel_Peace_Prize_logo.svg/1200px-Nobel_Peace_Prize_logo.svg.png',
              title: 'Global Peace and Development Award',
              year: '2022',
              desc: 'Awarded for outstanding work in peace-building and community resilience.',
            },
          ].map((award, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-5 text-center hover:-translate-y-1 transition-transform">
              <img src={award.img} alt={award.title} className="w-20 h-20 mb-4 object-contain filter grayscale hover:grayscale-0 transition" />
              <h3 className="text-lg font-semibold text-[#1a237e] mb-1">{award.title}</h3>
              <div className="text-sm text-gray-600 font-medium mb-2">{award.year}</div>
              <p className="text-sm text-gray-700">{award.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#e8f0fe] py-10 px-5 rounded-lg max-w-3xl mx-auto my-14">
        <h2 className="text-2xl font-semibold text-center text-[#2c3e50] mb-10">Milestones & Recognitions Timeline</h2>
        <ul className="relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-[3px] bg-[#1a73e8] rounded-md"></div>
          {[
            ['1991', 'Saath is founded, laying the foundation for inclusive urban development.'],
            ['2006', 'Received the UN-HABITAT Best Practices Award.'],
            ['2015', 'Recognized by the Social Enterprise Alliance for excellence in social impact.'],
            ['2018', 'Honored with the Skoll Award for Social Entrepreneurship.'],
            ['2022', 'Global Peace and Development Award received for community resilience efforts.'],
          ].map(([year, text], i) => (
            <li key={i} className="relative pl-5 mb-8">
              <div className="absolute -left-[10px] top-1 w-3 h-3 rounded-full bg-[#1a73e8] border-4 border-white shadow-md"></div>
              <div className="font-bold text-[#1a237e]">{year}</div>
              <div className="text-gray-700">{text}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials */}
      <section className="max-w-3xl mx-auto px-5 mt-16 mb-24">
        <h2 className="text-2xl font-semibold text-center text-[#2c3e50] mb-10">Voices of Gratitude</h2>
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((item, i) => (
              <div key={i} className="min-w-full bg-white p-6 rounded-lg shadow-md text-center italic text-gray-600">
                <p className="mb-4">"{item.text}"</p>
                <div className="font-semibold not-italic text-[#1a237e]">{item.author}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-6">
          <button onClick={prev} className="bg-[#1a73e8] text-white px-4 py-2 mx-2 rounded hover:bg-[#155ab5]">‹</button>
          <button onClick={next} className="bg-[#1a73e8] text-white px-4 py-2 mx-2 rounded hover:bg-[#155ab5]">›</button>
        </div>
      </section>

      {/* Footer Impact Note */}
      <footer className="bg-[#1a237e] text-white text-center px-5 py-10 font-semibold rounded-lg shadow-lg max-w-3xl mx-auto mb-10">
        <p>Every recognition is a reminder that our journey of creating lasting change continues. Thank you for being part of it.</p>
      </footer>
    </div>
  );
};

export default Awards;
