import React from "react";
import PriyaImg from "../../assets/intern photo1.jpg";
import RohanImg from "../../assets/intern photo2.jpg";
import NehaImg from "../../assets/intern photo3.png";
import AdityaImg from "../../assets/intern photo4.png";
import MeeraImg from "../../assets/intern photo5.jpg";
import ArjunImg from "../../assets/intern photo6.jpg";

const reports = [
            { name: "Priya Shah", topic: "Understanding Urban Poverty – A Field Experience", year: "Summer 2024" ,image: PriyaImg },
            { name: "Rohan Mehta", topic: "Women Empowerment through Microfinance", year: "Winter 2023", image: RohanImg  },
            { name: "Neha Patel", topic: "Sustainable Sanitation in Urban Slums", year: "Summer 2023", image: NehaImg },
            { name: "Aditya Rao", topic: "Education Access through Digital Tools", year: "Fall 2022", image: AdityaImg },
            { name: "Meera Singh", topic: "Nutrition & Health in Low-Income Communities", year: "Winter 2022", image: MeeraImg },
            { name: "Arjun Desai", topic: "Youth Employment Trends & Solutions", year: "Spring 2021", image: ArjunImg },
];

const InternReports = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <header className="bg-[#5A4E8C] text-white text-center py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">Intern Reports</h1>
          <p className="text-lg mt-2">
            Insights and experiences from our interns – showcasing learning, impact, and growth at Swikar Charitable.
          </p>
        </div>
      </header>
      <div className="max-w-screen-lg mx-auto px-8 py-6">
                {/* Profile Link */}
                <div className="text-right mb-6">
                    <p className="text-gray-600">
                        <a 
                            className="text-blue-600 hover:text-blue-800" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            href="https://Swikar Charitable.org/"
                        >
                            Home
                        </a> » Intern Reports
                    </p>
                </div>
                </div>

      {/* Filters Section */}
      <section className="bg-white py-6 text-center">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Search by intern name or topic..."
            className="border px-3 py-2 w-full md:w-1/3 rounded-md"
          />
          <select className="border px-3 py-2 rounded-md w-full md:w-1/4">
            <option>All Years</option>
            <option>2025</option>
            <option>2024</option>
            <option>2023</option>
          </select>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {reports.map((report, index) => (
            <div key={index} className="bg-white border shadow-md rounded-lg p-6 hover:scale-105 transition">
              <img src={report.image} alt={`${report.name} Photo`} className="w-full rounded-md" />
              <div className="mt-4">
                <h3 className="text-xl font-bold">{report.name}</h3>
                <p className="italic text-gray-600">{report.topic}</p>
                <span className="block mt-2 text-gray-500">{report.year}</span>
                <a href="#" className="text-blue-600 mt-2 inline-block">
                  Download Report
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-teal-100 text-center py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold">Interested in joining as an intern?</h2>
          <a href="#" className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-md inline-block">
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default InternReports;