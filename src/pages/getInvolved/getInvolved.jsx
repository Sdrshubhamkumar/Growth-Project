import React from 'react';
import ab from '../../assets/ab.jpg'; // replace with your actual path
import img2 from '../../assets/img2.jpg';   // replace with your actual path

const GetInvolved = () => {
  return (
    <div className="bg-white text-gray-800 py-10 px-5">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#5A4E8C]">Get Involved</h1>
        </div>

        {/* Internships Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img src={ab} alt="Internships at Saath" className="rounded-xl shadow-md" />
          <div>
            <h2 className="text-2xl font-semibold text-[#5A4E8C] mb-3">Internships at Saath</h2>
            <p className="mb-3">
              Saath Charitable Trust offers internship opportunities for students and professionals interested in urban development, social inclusion, and grassroots empowerment.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Title the email: Internship at Saath | your name.</li>
              <li>Email: <a href="mailto:mail@saath.org" className="text-blue-600">mail@saath.org</a></li>
              <li>Send CV + Letter of Motivation.</li>
              <li>Duration: Minimum 3–4 weeks.</li>
              <li>Internship is unpaid; you cover your own expenses.</li>
            </ul>
          </div>
        </div>

        {/* Internship Notes */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-[#5A4E8C] mb-3">While applying for the internship please take note:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>All documents must be attached for consideration.</li>
            <li>Clearly state your availability and area of interest.</li>
            <li>Internships are unpaid and only offered with approval.</li>
            <li>Interns must report to their mentors regularly.</li>
            <li>Saath can assist with documentation, but not visa processing.</li>
          </ul>
        </div>

        {/* Volunteering Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-[#5A4E8C] mb-3">Volunteering at Saath</h2>
            <p className="mb-3">
              Volunteers are key partners in driving change. Saath offers opportunities for students and professionals looking to give back, contribute skills, and gain field experience.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Title the email: Volunteering at Saath | your name.</li>
              <li>Email your CV and volunteering intent to <a href="mailto:mail@saath.org" className="text-blue-600">mail@saath.org</a></li>
              <li>Flexible volunteer durations based on discussion.</li>
            </ul>
          </div>
          <img src={img2} alt="Volunteering at Saath" className="rounded-xl shadow-md" />
        </div>

        {/* Volunteer Notes */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-[#5A4E8C] mb-3">To apply for volunteering please note:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Clearly mention your skills and areas of contribution.</li>
            <li>Volunteer opportunities are available for media, outreach, education, etc.</li>
            <li>Regular communication and feedback expected.</li>
            <li>Volunteers must follow Saath’s code of conduct.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
