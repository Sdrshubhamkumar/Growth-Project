import React from 'react';
import SectorCarousel from './SectorCarousel'; // ✅ Make sure this import is correct (adjust path if needed)

const HomeSector = () => {
  return (
    <div className="bg-gray-200 w-full">
      <div className="text-center text-2xl relative font-semibold mt-8">
        <h2>SECTORS</h2>
        <img
          className="mx-auto mt-2"
          src="https://saath.org/wp-content/themes/saath/images/heading-before.png"
          alt="About-Saath"
        />
      </div>

      <div className="mt-6">
        <div className="flex justify-center flex-wrap gap-6">

          {/* Sector 1 */}
          <figure className="relative inline-block w-[250px]">
            <a href="https://saath.org/programs/integrated-area-development/">
              <img
                src="https://saath.org/wp-content/uploads/2022/06/Integrated-Area-Development-3-300x225.jpg"
                alt="Integrated Area Development"
                className="w-full border-[10px] border-gray-300 rounded"
              />
            </a>
            <figcaption className="absolute bottom-2 left-2 right-2 bg-purple-800/65 text-white text-center p-2 text-sm">
              <h3>
                <a href="https://saath.org/programs/integrated-area-development/">
                  Integrated Area Development
                </a>
              </h3>
            </figcaption>
          </figure>

          {/* Sector 2 */}
          <figure className="relative inline-block w-[250px]">
            <a href="https://saath.org/programs/education/">
              <img
                src="https://saath.org/wp-content/uploads/2022/06/Education-300x200.jpg"
                alt="Education"
                className="w-full border-[10px] border-gray-300 rounded"
              />
            </a>
            <figcaption className="absolute bottom-2 left-2 right-2 bg-purple-800/65 text-white text-center p-2 text-sm">
              <h3>
                <a href="https://saath.org/programs/education/">
                  Education
                </a>
              </h3>
            </figcaption>
          </figure>

          {/* Sector 3 */}
          <figure className="relative inline-block w-[250px]">
            <a href="https://saath.org/programs/livelihood/">
              <img
                src="https://saath.org/wp-content/uploads/2022/06/Livelihood-300x200.jpg"
                alt="Livelihoods"
                className="w-full border-[10px] border-gray-300 rounded"
              />
            </a>
            <figcaption className="absolute bottom-2 left-2 right-2 bg-purple-800/65 text-white text-center p-2 text-sm">
              <h3>
                <a href="https://saath.org/programs/livelihood/">
                  Livelihoods
                </a>
              </h3>
            </figcaption>
          </figure>

          {/* Sector 4 */}
          <figure className="relative inline-block w-[250px]">
            <a href="https://saath.org/programs/urban-governance/">
              <img
                src="https://saath.org/wp-content/uploads/2016/07/samaveshi-shaher-program-300x200.jpg"
                alt="Urban Governance"
                className="w-full border-[10px] border-gray-300 rounded"
              />
            </a>
            <figcaption className="absolute bottom-2 left-2 right-2 bg-purple-800/65 text-white text-center p-2 text-sm">
              <h3>
                <a href="https://saath.org/programs/urban-governance/">
                  Urban Governance
                </a>
              </h3>
            </figcaption>
          </figure>
        </div>

        <div className="text-center my-12">
          <a
            href="https://saath.org/profile/"
            className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
          >
            View More
          </a>
        </div>

        {/* ASSOCIATIONS Heading */}
        <div className="text-center text-4xl relative font-bold mt-8">
          <h2>ASSOCIATIONS</h2>
          <img
            className="mx-auto mt-2"
            src="https://saath.org/wp-content/themes/saath/images/heading-before.png"
            alt="About-Saath"
          />
        </div>

      
        <SectorCarousel/>
      </div>
    </div>
  );
};

export default HomeSector;
