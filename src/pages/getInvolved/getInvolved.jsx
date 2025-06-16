import React from 'react';
import ab from '../../assets/ab.jpg';
import img2 from '../../assets/img2.jpg';

const GetInvolved = () => {
  return (
    <div className="bg-white text-gray-800 py-10 px-5">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Page Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#5A4E8C]">Get Involved</h1>
        </div>

        {/* Internship Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img 
            src={ab} 
            alt="Interns with Saath community members" 
            className="rounded-xl shadow-lg w-full object-cover" 
          />
          <div>
            <h2 className="text-2xl font-semibold text-[#5A4E8C] mb-3">Internships at Saath</h2>
            <p className="mb-3">
              Saath Charitable Trust offers internship opportunities for students and professionals interested in urban development, social inclusion, and grassroots empowerment.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Title the email: <strong>Internship at Saath | your name</strong>.</li>
              <li>Email: <a href="mailto:mail@saath.org" className="text-blue-600 underline">mail@saath.org</a></li>
              <li>Send CV and Letter of Motivation.</li>
              <li>Minimum duration: 3–4 weeks.</li>
              <li>Internship is unpaid; you cover your own expenses.</li>
            </ul>
          </div>
        </div>

        {/* Internship Notes */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-[#5A4E8C] mb-3">Important Internship Notes</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>All documents must be attached for consideration.</li>
            <li>State your availability and area of interest clearly.</li>
            <li>Internship offers are confirmed after review.</li>
            <li>Interns report progress to assigned mentors.</li>
            <li>Visa and travel responsibilities lie with the intern.</li>
          </ul>
        </div>

        {/* Volunteering Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-[#5A4E8C] mb-3">Volunteering at Saath</h2>
            <p className="mb-3">
              Volunteers are key partners in driving change. Saath offers opportunities for students and professionals to contribute skills, give back to society, and gain grassroots experience.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Title the email: <strong>Volunteering at Saath | your name</strong>.</li>
              <li>Email your CV and intent to: <a href="mailto:mail@saath.org" className="text-blue-600 underline">mail@saath.org</a></li>
              <li>Volunteer duration is flexible and mutually decided.</li>
            </ul>
          </div>
          <img 
            src={img2} 
            alt="Volunteers engaging with the community at Saath" 
            className="rounded-xl shadow-lg w-full object-cover" 
          />
        </div>

        {/* Volunteer Notes */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-[#5A4E8C] mb-3">Volunteer Guidelines</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Mention your skills and expected contribution clearly.</li>
            <li>Opportunities include media, outreach, education, etc.</li>
            <li>Active communication and timely updates required.</li>
            <li>Volunteers must follow Saath's code of conduct.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default GetInvolved;
