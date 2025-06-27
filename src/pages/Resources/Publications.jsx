// import React from "react";

// const publications = [
//   {
//     title: "Social Return on Investment: 1999-2019",
//     link: "https://Swikar Charitable.org/assets/images/SROI-Report-_-Swikar Charitable-.pdf",
//   },
//   {
//     title: "Study of Ahmedabad City - A Public Private Partnership model in sanitation, March 2004",
//     link: "https://Swikar Charitable.org/assets/images/iim-Swikar Charitable-health.pdf",
//   },
//   {
//     title: "Evaluation Study on Integrated Development of Slums (IDSMT) and Shelter Project, Swikar Charitable Charitable Trust and Ford Foundation",
//     link: "https://Swikar Charitable.org/assets/images/Swikar Charitable-phf-eval-report-final-2-dec.pdf",
//   },
//   {
//     title: "White Paper Summary: Developing a Health Strategy in Slums, 2004-05, Ahmedabad",
//     link: "https://Swikar Charitable.org/assets/images/health-white-paper-summary-v01.pdf",
//   },
//   {
//     title: "Working Paper – Slum Networking, Ahmedabad, 2004, Swikar Charitable Charitable Trust",
//     link: "https://Swikar Charitable.org/assets/images/sankalitnagar-status-paper-09-final.pdf",
//   },
//   {
//     title: "Research Paper - From Basic Services to Policy Advocacy, Jan 2005, Centre for Urban Equity",
//     link: "https://Swikar Charitable.org/assets/images/Swikar Charitable-cept-paper.pdf",
//   },
//   {
//     title: "Livelihood Mapping and Planning of Jalvihar Slums of Tardeo and Bhiwandi, 2006, Cohesion Foundation, Swikar Charitable",
//     link: "https://Swikar Charitable.org/assets/images/ajeevika.pdf",
//   },
//   {
//     title: "Report - Swikar Charitable Sanitation Loan Scheme, 2006-2007, Swikar Charitable Charitable Trust",
//     link: "https://Swikar Charitable.org/assets/images/report-on-sanitation-loan.pdf",
//   },
//   {
//     title: "Status Paper – Slumnet, Ahmedabad, 2008, Swikar Charitable Charitable Trust",
//     link: "https://Swikar Charitable.org/assets/images/sankalitnagar-status-paper-2009.pdf",
//   },
//   {
//     title: "External Evaluation – Unnati, 2010, GIZ/IM",
//     link: "https://Swikar Charitable.org/assets/images/second-quarter-reportfor-gudm.pdf",
//   },
//   {
//     title: "External Evaluation: YuvaParivartan Project, 2013, Design & Planning Council",
//     link: "https://Swikar Charitable.org/assets/images/tpi-youth-force-final-report.pdf",
//   },
//   {
//     title: "Research Paper: Transformation in Technology through Partnership in Development Work: A case study from India, 2014, Jan 2014",
//     link: "https://Swikar Charitable.org/assets/images/transformations_in_technology_report-109-128-1.pdf",
//   },
//   {
//     title: "External Evaluation – Women@Work Program, 2015-16, Jan 2016",
//     link: "https://Swikar Charitable.org/assets/images/W@W-External-Evaluation.pdf",
//   },
//   {
//     title: "Evaluation Document: Dakshata Gas Program Report, 2017, GIZ India",
//     link: "https://Swikar Charitable.org/assets/images/Business-Gym-Report.pdf",
//   },
//   {
//     title: "Insight Report – Innovations in Informal Sector",
//     link: "https://Swikar Charitable.org/assets/images/Insight-Report-Nano-Entrepreneurs.pdf",
//   },
//   {
//     title: "A Study of Swikar Charitable Urban Homeless in Varanasi",
//     link: "https://Swikar Charitable.org/assets/images/A-Study-of-SUH-in-Varanasi.pdf",
//   },
//   {
//     title: "Covid Response Report 1: Demystifying Community Realities in Covid Crisis - Swikar Charitable Urban Poor Report",
//     link: "https://Swikar Charitable.org/assets/images/Swikar Charitable-Covid-Response-Phase-1.pdf",
//   },
//   {
//     title: "Report on study of Swikar Charitable Urban Homeless in Ahmedabad, GIZ/Swikar Charitable, March 2020",
//     link: "https://Swikar Charitable.org/assets/images/REPORT-SUH_CISHAA_March-2020.pdf",
//   },
//   {
//     title: "Summary of Key Findings & Recommendations: GIZ/Swikar Charitable Ahmedabad",
//     link: "https://Swikar Charitable.org/assets/images/Summary-of-Main-Findings-and-Recommendations-CISHAA.pdf",
//   },
//   {
//     title: "A Study of Swikar Charitable Urban Homeless in Jaipur",
//     link: "https://Swikar Charitable.org/assets/images/A-Study-of-Shelters-for-Urban-Homeless-in-Jaipur.pdf",
//   },
// ];

// const Publications = () => {
//   return (
//     <div className="publications">
//       <div className="bg-[#5A4E8C] text-white text-center py-6">
//                 <h1 className="text-3xl font-bold">Publications</h1>
//             </div>

//             {/* Content Section */}
//             <div className="max-w-screen-lg mx-auto px-8 py-6">
//                 {/* Profile Link */}
//                 <div className="text-right mb-6">
//                     <p className="text-gray-600">
//                         <a 
//                             className="text-blue-600 hover:text-blue-800" 
//                             target="_blank" 
//                             rel="noopener noreferrer"
//                             href="https://Swikar Charitable.org/"
//                         >
//                             Home
//                         </a> » Publications
//                     </p>
//                 </div>
//                 </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4 max-w-6xl mx-auto">
//         {publications.map((pub, index) => (
//           <a
//             key={index}
//             href={pub.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="relative bg-[#5f4b8b] text-white px-6 pt-10 pb-6 min-h-[130px] rounded shadow-md hover:bg-[#4b3b73] transition-all duration-300 flex items-start justify-center text-center"
//           >
//             {/* Optional: PDF icon placeholder */}
//             <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white rounded-full border-4 border-[#5f4b8b] flex items-center justify-center text-[#5f4b8b] font-bold text-xs">
//               PDF
//             </div>
//             <span className="text-sm font-semibold leading-snug">{pub.title}</span>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Publications;