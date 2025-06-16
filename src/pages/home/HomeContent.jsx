import React from 'react';

const HomeContent = () => {
  return (
    <div className="px-4 md:px-10 lg:px-40 mt-10">
      {/* Scrolling Announcements */}
      <div className="overflow-hidden whitespace-nowrap mb-6">
      <marquee behavior="scroll" direction="left">
          <a
            href="https://saath.org/wp-content/uploads/2024/12/Insight-Report-Nano-Entrepreneurs-2-1.pdf"
            target="_blank"
            className="text-black text-base no-underline mr-8"
          >
            Insight Report Nano Entrepreneurs in Informal Sector
          </a>
          <a
            href="https://saath.org/wp-content/uploads/2024/12/BG-Report-for-Print-1.pdf"
            target="_blank"
            className="text-black text-base no-underline"
          >
            BUSINESS-GYM - Progress Report 2024
          </a>
        </marquee>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* About Section */}
        <div className="flex-1">
          <div className="text-center text-4xl font-bold relative">
            <h2>About</h2>
          
          </div>

          <div className="text-gray-600 mt-6 space-y-6 text-justify">
            <p>
              Saath (which in Hindi/Gujarati means ‘together, co-operation, a collective or support’), founded in 1989, is an NGO in India registered as a Public Charitable Trust and is based in Ahmedabad, Gujarat. Saath closely works with the deprived communities and empowers the socially marginalized by providing them livelihood services, and imparting skills leading to employment, health and education facilities. Saath focuses on livelihood services, child rights, human rights, young girls’ education, skill development and other community services.
            </p>

            <div className="text-center text-4xl font-bold">Vision</div>
            <p>Saath envisions inclusive and empowered communities and individuals</p>

            <div className="text-center text-4xl font-bold">Mission</div>
            <p>
              To make human settlements equitable living environments where all residents and vulnerable people have access to health, education, essential infrastructure services and livelihood options, irrespective of their economic and social status.
            </p>

            <div className="w-full mt-6 flex justify-center">
  <iframe
    className="w-3/4 h-64 sm:h-72 md:h-80"
    src="https://www.youtube.com/embed/dx9dsFbRobs"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>


            <div className="text-center mt-6">
              <a className="bg-gray-700 text-white text-sm py-2 px-8 rounded-md" href="https://saath.org/profile/">
                Read More
              </a>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
       <div className="w-full lg:w-[360px] border border-gray-300">
          <div className="text-center  bg-[#5A4E8C] text-white  font-extrabold text-4xl uppercase">
            Highlights
          
          </div>

          <div className="text-gray-600 m-5 space-y-6 text-justify">
            {/* Highlight 1 */}
            <div>
              <p className="font-semibold">Building the Resilience through Entrepreneurial Abilities</p>
              <a href="https://saath.org/highlights/" className="text-black">
                Saath through its various livelihood programs, works with youths, and women to increase their business revenue, financial management, and inciting allied entrepreneurial abilities...
              </a>
              <p className="text-right text-sm mt-2">13-06-2022</p>
              <hr className="my-4" />
            </div>

            {/* Highlight 2 */}
            <div>
              <p className="font-semibold">Reflecting 33 years of Saath’s journey</p>
              <a href="https://saath.org/highlights/" className="text-black">
                Saath has witnessed several growths in terms of catering to the social, financial, educational, health & nutritional, livelihood, and housing needs of the urban communities with the support of government bodies, allied partners, and community participation...
              </a>
              <p className="text-right text-sm mt-2">08-06-2022</p>
              <hr className="my-4" />
            </div>

            {/* Highlight 3 */}
            <div>
              <p className="font-semibold">Stop the Spread</p>
              <a href="https://saath.org/highlights/" className="text-black">
                Stop the spread project recognizes the need for greater awareness and ground-level facilitation for ensuring wide coverage of vaccination in Ahmedabad and Surat...
              </a>
              <p className="text-right text-sm mt-2">November 9, 2021</p>
              <hr className="my-4" />
            </div>
          </div>

          <div className="text-center mt-6">
            <a href="https://saath.org/highlights/" className="text-black underline">
              View All
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
