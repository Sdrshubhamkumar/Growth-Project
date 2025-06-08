// File: src/components/GetInvolved.tsx
import React from "react";
import ab from '../../assets/ab.jpg';
import img2 from '../../assets/img2.jpg';

const GetInvolved = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 md:px-12 lg:px-24">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-12">
        Get Involved
      </h1>

      {/* Internships Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12 bg-white rounded-xl shadow-md p-6">
        <img
          src={ab}
          alt="Internships at Saath"
          className="rounded-lg object-cover w-full h-auto"
        />
        <div>
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            Internships at Saath
          </h2>
          <p className="mb-2">
            Saath Charitable Trust offers immersive internship opportunities for students and professionals interested in urban development, education, health, child rights, governance, and more.
          </p>
          <p className="mb-4">
            To apply for internships, send the following to{" "}
            <span className="text-blue-600 font-medium">mail@saath.org</span>:
          </p>
          <ul className="list-disc list-inside text-sm space-y-1 mb-4">
            <li>Filled Internship Form</li>
            <li>Updated Resume</li>
            <li>Letter from your University/College/Institute</li>
          </ul>
          <a
            href="https://saath.org/assets/Internship_Form_Saath.docx"
            className="text-blue-600 underline text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Internship Form
          </a>
        </div>
      </div>

      {/* Internship Notes Card */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-16">
        <h3 className="font-semibold text-lg mb-4 text-purple-700">
          While applying for the internship, please take note of the following:
        </h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>The subject line for the email should be: Internship at Saath | Your name | Institute</li>
          <li>All the documents mentioned above need to be attached</li>
          <li>Field work will be compulsory for all interns</li>
          <li>No stipend/housing provided by Saath</li>
          <li>Interns are recommended to read about the organization before applying</li>
          <li>Minimum duration of internship should be at least 15 days</li>
          <li>Application must be submitted at least 15 days in advance</li>
          <li>A weekly report must be submitted to the supervisor</li>
          <li>A certificate will be awarded after review and submission of the final report</li>
          <li>Saath shall not be liable for any accidents or injuries during field work</li>
        </ul>
      </div>

      {/* Volunteering Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12 bg-white rounded-xl shadow-md p-6">
        <div>
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            Volunteering at Saath
          </h2>
          <p className="mb-2">
            Volunteering at Saath allows you to make a real impact in the lives of the urban poor. You can contribute on-ground or remotely to a variety of causes.
          </p>
          <p className="mb-2">
            We welcome individuals, student groups, and professionals who are passionate about driving change. Your time and skills can transform communities.
          </p>
          <p className="mb-4">
            For volunteering opportunities, write to{" "}
            <span className="text-blue-600 font-medium">mail@saath.org</span>
          </p>
          <a
            href="https://saath.org/assets/Volunteering_Form_Saath.docx"
            className="text-blue-600 underline text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Volunteering Form
          </a>
        </div>
        <img
          src={img2}
          alt="Volunteering at Saath"
          className="rounded-lg object-cover w-full h-auto"
        />
      </div>

      {/* Volunteering Notes Card */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h3 className="font-semibold text-lg mb-4 text-purple-700">
          To apply for volunteering, please take note of the following:
        </h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Email subject: Volunteering at Saath | Your Name</li>
          <li>Attach filled form and updated resume</li>
          <li>Weekend volunteering options are limited</li>
          <li>Online volunteering roles available in:
            <ul className="list-disc list-inside ml-6 mt-1">
              <li>Research</li>
              <li>Fundraising</li>
              <li>Social media design</li>
              <li>Content writing</li>
            </ul>
          </li>
          <li>Saath will assign roles based on need and availability</li>
          <li>Weekly reports must be submitted</li>
          <li>Certificates issued upon successful review</li>
          <li>Saath shall not be liable for accidents or injuries during field work</li>
        </ul>
      </div>
    </div>
  );
};

export default GetInvolved;
