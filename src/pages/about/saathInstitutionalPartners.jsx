import React from 'react'
import Picture1 from '../../assets/SL-Logo (1).png';
import Picture2 from '../../assets/Saath-Cooperative-1.png';
import Picture3 from '../../assets/Untitled-design-3-1.jpg';
import Picture4 from '../../assets/Saath-Facilitators.png';

function SaathInstitutionalPartners() {
  return (
    
        <div className="saathinstitutionalpartners">
      {/* Heading Section */}
      <div className="bg-[#5A4E8C] text-white text-center py-6">
        <h1 className="text-3xl font-bold">Saath Institutional Partners</h1>
      </div>

      <div className="max-w-screen-lg mx-auto px-8 py-6 space-y-8">
        {/* Profile Link */}
        <div className="text-right mb-6">
                    <p className="text-gray-600">
                        <a 
                            className="text-blue-600 hover:text-blue-800" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            href="https://saath.org/"
                        >
                            Home
                        </a> » Saath Institutional Partners

                    </p>
                </div>

      
      {/* Partners Section */}
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto px-8">
          {/* Partner 1 */}
          <div className="text-center border-8 border-gray-300 rounded-lg shadow-md p-1">
            <figure className="text-center">
              <a href="https://saath.org/saath-institutional-partners/saath-livelihood-services/">
                <img 
                  width="250" 
                  height="160" 
                  src={Picture1} 
                  alt="Saath Livelihood Services" 
                  className="mx-auto rounded-lg shadow"
                />
              </a>
              <figcaption className="mt-4">
                <h3 className="text-lg font-bold">
                  <a 
                    href="https://saath.org/saath-institutional-partners/saath-livelihood-services/" 
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Saath Livelihood Services
                  </a>
                </h3>
              </figcaption>
            </figure>
          </div>

          {/* Partner 2 */}
          <div className="text-center border-8 border-gray-300 rounded-lg shadow-md p-1">
            <figure className="text-center">
              <a href="https://saath.org/saath-institutional-partners/the-saath-savings-and-credit-cooperative-society-ltd/">
                <img 
                  width="250" 
                  height="160" 
                  src={Picture2}
                  alt="Saath Savings and Credit Cooperative Society" 
                  className="mx-auto rounded-lg shadow"
                />
              </a>
              <figcaption className="mt-4">
                <h3 className="text-lg font-bold">
                  <a 
                    href="https://saath.org/saath-institutional-partners/the-saath-savings-and-credit-cooperative-society-ltd/" 
                    className="text-blue-600 hover:text-blue-800"
                  >
                    The Saath Savings and Credit Cooperative Society Ltd.
                  </a>
                </h3>
              </figcaption>
            </figure>
          </div>

          {/* Partner 3 */}
          <div className="text-center border-8 border-gray-300 rounded-lg shadow-md p-1">
            <figure className="text-center">
              <a href="https://saath.org/saath-institutional-partners/saath-mahila-savings-and-credit-cooperative-society-ltd/">
                <img 
                  width="250" 
                  height="160" 
                  src={Picture3}
                  alt="Saath-Janvikas Multipurpose Cooperative Model" 
                  className="mx-auto rounded-lg shadow"
                />
              </a>
              <figcaption className="mt-4">
                <h3 className="text-lg font-bold">
                  <a 
                    href="https://saath.org/saath-institutional-partners/saath-mahila-savings-and-credit-cooperative-society-ltd/" 
                    className="text-blue-600 hover:text-blue-800"
                  >
                    The Saath-Janvikas Multipurpose Cooperative Model (SJMPC)
                  </a>
                </h3>
              </figcaption>
            </figure>
          </div>

          {/* Partner 4 - Positioned in the second row under Partner 2 */}
          <div className="text-center border-8 border-gray-300 rounded-lg shadow-md p-1">
            <figure className="text-center">
              <a href="https://saath.org/saath-institutional-partners/saath-facilator-services/">
                <img 
                  width="250" 
                  height="160" 
                  src={Picture4}
                  alt="Saath Facilitators Pvt. Ltd." 
                  className="mx-auto rounded-lg shadow"
                />
              </a>
              <figcaption className="mt-4">
                <h3 className="text-lg font-bold">
                  <a 
                    href="https://saath.org/saath-institutional-partners/saath-facilator-services/" 
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Saath Facilitators Pvt. Ltd.
                  </a>
                </h3>
              </figcaption>
            </figure>
          </div>
        </div>

      </div>
    </div>
    
  )
}

export default SaathInstitutionalPartners