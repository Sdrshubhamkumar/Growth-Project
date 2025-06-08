import React from "react";

const publications = [
  {
    title: "Social Return on Investment: 1999-2019",
    link: "https://saath.org/assets/images/SROI-Report-_-Saath-.pdf",
  },
  {
    title: "Study of Ahmedabad City - A Public Private Partnership model in sanitation, March 2004",
    link: "https://saath.org/assets/images/iim-saath-health.pdf",
  },
  {
    title: "Evaluation Study on Integrated Development of Slums (IDSMT) and Shelter Project, Saath Charitable Trust and Ford Foundation",
    link: "https://saath.org/assets/images/saath-phf-eval-report-final-2-dec.pdf",
  },
  {
    title: "White Paper Summary: Developing a Health Strategy in Slums, 2004-05, Ahmedabad",
    link: "https://saath.org/assets/images/health-white-paper-summary-v01.pdf",
  },
  {
    title: "Working Paper – Slum Networking, Ahmedabad, 2004, SAATH Charitable Trust",
    link: "https://saath.org/assets/images/sankalitnagar-status-paper-09-final.pdf",
  },
  {
    title: "Research Paper - From Basic Services to Policy Advocacy, Jan 2005, Centre for Urban Equity",
    link: "https://saath.org/assets/images/saath-cept-paper.pdf",
  },
  {
    title: "Livelihood Mapping and Planning of Jalvihar Slums of Tardeo and Bhiwandi, 2006, Cohesion Foundation, SAATH",
    link: "https://saath.org/assets/images/ajeevika.pdf",
  },
  {
    title: "Report - Saath Sanitation Loan Scheme, 2006-2007, Saath Charitable Trust",
    link: "https://saath.org/assets/images/report-on-sanitation-loan.pdf",
  },
  {
    title: "Status Paper – Slumnet, Ahmedabad, 2008, Saath Charitable Trust",
    link: "https://saath.org/assets/images/sankalitnagar-status-paper-2009.pdf",
  },
  {
    title: "External Evaluation – Unnati, 2010, GIZ/IM",
    link: "https://saath.org/assets/images/second-quarter-reportfor-gudm.pdf",
  },
  {
    title: "External Evaluation: YuvaParivartan Project, 2013, Design & Planning Council",
    link: "https://saath.org/assets/images/tpi-youth-force-final-report.pdf",
  },
  {
    title: "Research Paper: Transformation in Technology through Partnership in Development Work: A case study from India, 2014, Jan 2014",
    link: "https://saath.org/assets/images/transformations_in_technology_report-109-128-1.pdf",
  },
  {
    title: "External Evaluation – Women@Work Program, 2015-16, Jan 2016",
    link: "https://saath.org/assets/images/W@W-External-Evaluation.pdf",
  },
  {
    title: "Evaluation Document: Dakshata Gas Program Report, 2017, GIZ India",
    link: "https://saath.org/assets/images/Business-Gym-Report.pdf",
  },
  {
    title: "Insight Report – Innovations in Informal Sector",
    link: "https://saath.org/assets/images/Insight-Report-Nano-Entrepreneurs.pdf",
  },
  {
    title: "A Study of Saath Urban Homeless in Varanasi",
    link: "https://saath.org/assets/images/A-Study-of-SUH-in-Varanasi.pdf",
  },
  {
    title: "Covid Response Report 1: Demystifying Community Realities in Covid Crisis - Saath Urban Poor Report",
    link: "https://saath.org/assets/images/Saath-Covid-Response-Phase-1.pdf",
  },
  {
    title: "Report on study of Saath Urban Homeless in Ahmedabad, GIZ/SAATH, March 2020",
    link: "https://saath.org/assets/images/REPORT-SUH_CISHAA_March-2020.pdf",
  },
  {
    title: "Summary of Key Findings & Recommendations: GIZ/SAATH Ahmedabad",
    link: "https://saath.org/assets/images/Summary-of-Main-Findings-and-Recommendations-CISHAA.pdf",
  },
  {
    title: "A Study of Saath Urban Homeless in Jaipur",
    link: "https://saath.org/assets/images/A-Study-of-Shelters-for-Urban-Homeless-in-Jaipur.pdf",
  },
];

const Publications = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="bg-[#5A4E8C] text-white text-center py-6">
                <h1 className="text-3xl font-bold">Publications</h1>
            </div>

            {/* Content Section */}
            <div className="max-w-screen-lg mx-auto px-8 py-6">
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
                        </a> » Publications
                    </p>
                </div>
                </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4 max-w-6xl mx-auto">
        {publications.map((pub, index) => (
          <a
            key={index}
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-[#5f4b8b] text-white px-6 pt-10 pb-6 min-h-[130px] rounded shadow-md hover:bg-[#4b3b73] transition-all duration-300 flex items-start justify-center text-center"
          >
            {/* Optional: PDF icon placeholder */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white rounded-full border-4 border-[#5f4b8b] flex items-center justify-center text-[#5f4b8b] font-bold text-xs">
              PDF
            </div>
            <span className="text-sm font-semibold leading-snug">{pub.title}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Publications;