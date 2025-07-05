import React from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import facebook from '../../assets/facebook.jpg';
import  fix1 from '../../assets/fix1.png';
import  fix2 from '../../assets/fix2.png';
import  fix4 from '../../assets/fix4.png';
import  instagramlogo from '../../assets/innovation/instagramlogo.png';

const Footer = () => {
  return (
    <div className="w-full">
      <footer>
        <div className="flex flex-row flex-wrap gap-10 px-6 py-10 bg-white justify-center">
          
          {/* Blog Section */}
          <div className="flex flex-col">
          <div class="flex items-center mb-6">
  <div class="relative">
    <h2 class="text-2xl font-bold">BLOG</h2>
    <div class="flex items-center mt-2">
      <div class="w-10 h-1 bg-purple-700"></div> 
      <div class="w-2"></div> 
      <div class="w-72 h-px bg-gray-300"></div> 
    </div>
  </div>
</div>


            {/* Post 1 */}
            <div className="bg-gray-200 flex mb-4 w-90">
              <div className="w-[350px] h-[155px]">
                <img
                  alt="blog"
                  src={fix1}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <ul className="text-sm text-gray-500 mb-2">
                  <li>
                    <i className="far fa-calendar mr-2"></i>
                    <a
                      className="text-gray-500"
                      href="https://Swikar Charitable.wordpress.com/2022/08/06/painting-the-young-minds-journey-at-Swikar Charitable/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      18-08-2022
                    </a>
                  </li>
                </ul>
                <a
                  className="text-sm font-semibold text-gray-700"
                  target="_blank"
                  rel="noreferrer"
                  href="https://Swikar Charitable.wordpress.com/2022/08/18/getting-closer-to-social-work-this-summer/"
                >
                  "Getting closer to social work this summer" - Ghori Zeeshan Sanaullakhan
                </a>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-gray-200 flex mb-4 w-90">
              <div className="w-[350px] h-[155px]">
                <img
                  alt="blog"
                  src={fix2}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <ul className="text-sm text-gray-500 mb-2">
                  <li>
                    <i className="far fa-calendar mr-2"></i>
                    <a
                      className="text-gray-500"
                      href="https://Swikar Charitable.wordpress.com/2022/08/06/painting-the-young-minds-journey-at-Swikar Charitable/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      06-08-2022
                    </a>
                  </li>
                </ul>
                <a
                  className="text-sm font-semibold text-gray-700"
                  target="_blank"
                  rel="noreferrer"
                  href="https://Swikar Charitable.wordpress.com/2022/08/06/painting-the-young-minds-journey-at-Swikar Charitable/"
                >
                  "Painting the young minds journey at Swikar Charitable" - Shashi Kumar
                </a>
              </div>
            </div>

            {/* Post 3 */}
            <div className="bg-gray-200 flex mb-4 w-90">
              <div className="w-[350px] h-[155px]">
                <img
                  alt="blog"
                  src={fix4}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <ul className="text-sm text-gray-500 mb-2">
                  <li>
                    <i className="far fa-calendar mr-2"></i>
                    <a
                      className="text-gray-500"
                      href="https://Swikar Charitable.wordpress.com/2022/03/29/an-experience-to-be-cherished/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      29-03-2022
                    </a>
                  </li>
                </ul>
                <a
                  className="text-sm font-semibold text-gray-700"
                  target="_blank"
                  rel="noreferrer"
                  href="https://Swikar Charitable.wordpress.com/2022/03/29/an-experience-to-be-cherished/"
                >
                  "An experience to be cherished" - Durga Kavya Ramkumar
                </a>
              </div>
            </div>
          </div>

          {/* Facebook and Instagram Section */}
          <div className="flex flex-col items-center gap-10">
            <div>
            <div class="flex items-center mb-6">
  <div class="relative">
    <h2 class="text-2xl font-bold">LIKE US ON FACEBOOK</h2>
    <div class="flex items-center mt-2">
      <div class="w-10 h-1 bg-purple-700"></div> 
      <div class="w-2"></div> 
      <div class="w-72 h-px bg-gray-300"></div> 
    </div>
  </div>
</div>
              <img
                className="w-full h-auto bg-gray-200 p-12"
                src={facebook}
                alt="Facebook"
              />
            </div>

            <div>
            <div class="flex items-center mb-6">
  <div class="relative">
    <h2 class="text-2xl font-bold">FOLLOW US ON INSTAGRAM</h2>
    <div class="flex items-center mt-2">
      <div class="w-10 h-1 bg-purple-700"></div> 
      <div class="w-2"></div> 
      <div class="w-72 h-px bg-gray-300"></div> 
    </div>
  </div>
</div>
              <a
                href="https://www.instagram.com/Swikar Charitableahmedabad/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center bg-gray-200 p-16"
              >
                <img
                  src={instagramlogo}
                  alt="Instagram"
                  className="w-14 h-14 mr-3"
                />
                <span className="text-2xl font-bold text-blue-600">Swikar Charitable Ahmedabad</span>
              </a>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col gap-4 max-w-sm">
          <div class="flex items-center mb-6">
  <div class="relative">
    <h2 class="text-2xl font-bold">CONTACT US</h2>
    <div class="flex items-center mt-2">
      <div class="w-10 h-1 bg-purple-700"></div> 
      <div class="w-2"></div> 
      <div class="w-72 h-px bg-gray-300"></div> 
    </div>
  </div>
</div>
            <div className="flex items-start text-sm text-gray-700">
              <i className="fa fa-globe text-xl mr-3 mt-1 text-gray-500"></i>
              <p>
                Swikar Charitable Trust<br />
               #113/c, 1stage 4th cross,<br />
                Besillu Maramma,<br />
                Temple, Gangothri Layout,<br />
               Mysore, 570009.
              </p>
            </div>
            <div className="flex items-center text-sm">
              <i className="fa fa-envelope text-xl mr-3 text-gray-500"></i>
              <a href="mailto:mail@Swikar Charitable.org" className="text-blue-500">Info@swikarcharitabletrust.org</a>
            </div>
            <div className="flex items-center text-sm">
              <i className="fa fa-phone text-xl mr-3 text-gray-500"></i>
              <span>7676651025</span>
            </div>
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3672.109864158185!2d72.517641!3d23.019738!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbc1e05ff4a246bd3!2sSwikar Charitable+Charitable+Trust!5e0!3m2!1sen!2s!4v1455538805452"
              className="w-full h-44 border-0 rounded"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Swikar Charitable Location"
            ></iframe> */}
          </div>

        </div>

        {/* Footer Bottom Line */}
       {/* Footer Bottom Line */}
 {/* Footer Bottom Line */}
<div className="bg-black text-white py-8">
  <p className="text-xs px-4 md:px-0 md:pl-60 text-center md:text-left">
    Copyright © 2016 Swikar Charitable.
    <br className="block md:hidden" />
    <a
      href="https://www.siliconinfo.com"
      className="underline ml-1"
      target="_blank"
      rel="noreferrer"
    >
      Website Design And Development
    </a>{' '}
    By Silicon Valley
  </p>
</div>


      </footer>
    </div>
  );
};

export default Footer;
