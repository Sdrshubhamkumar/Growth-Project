import React from "react";
import p1 from '../../Assets/2023-24.png';
import p2 from '../../Assets/2022-23.png';
import p3 from '../../Assets/2021-22.png';
import p4 from '../../Assets/2020-21.jpg';
import p5 from '../../Assets/2019-20.png';
import p6 from '../../Assets/2018-19.png';
import p7 from '../../Assets/2017-18.png';
import p8 from '../../Assets/2016-17.png';
import p9 from '../../Assets/2015-16.png';
import p10 from '../../Assets/2014-15.png';
import p11 from '../../Assets/2013-14.png';
import p12 from '../../Assets/2012-13.png';
import p13 from '../../Assets/2011-12.png';
import p14 from '../../Assets/2010-11.png';
import p15 from '../../Assets/2009-10.png';
import p16 from '../../Assets/2008-09.png';
import p17 from '../../Assets/2007-08.png';


const reports = [
  { year: "2023-24", image: p1, viewLink: "https://saath.org/assets/images/Annual-Report-2023-2024.pdf", downloadLink: "https://saath.org/assets/images/Annual-Report-2023-2024.pdf" },
  { year: "2022-23", image: p2, viewLink: "https://saath.org/assets/images/Saath-Annual-Report-2022-23.pdf", downloadLink: "https://saath.org/assets/images/Saath-Annual-Report-2022-23.pdf" },
  { year: "2021-22", image: p3, viewLink: "http://localhost:5173/annual-reports", downloadLink: "http://localhost:5173/annual-reports" },
  { year: "2020-21", image: p4, viewLink: "https://saath.org/assets/images/SCT-Annual-Report-2020-21-V2-2-1-1.pdf", downloadLink: "https://saath.org/assets/images/SCT-Annual-Report-2020-21-V2-2-1-1.pdf" },
  { year: "2019-20", image: p5, viewLink: "https://saath.org/assets/images/Annual-Report-2019-20.pdf", downloadLink: "https://saath.org/assets/images/Annual-Report-2019-20.pdf" },
  { year: "2018-19", image: p6, viewLink: "https://saath.org/assets/images/Annual-Report-2018-2019.pdf", downloadLink: "https://saath.org/assets/images/Annual-Report-2018-2019.pdf" },
  { year: "2017-18", image: p7, viewLink: "https://saath.org/assets/images/Annual-Report-2017-18.pdf", downloadLink: "https://saath.org/assets/images/Annual-Report-2017-18.pdf" },
  { year: "2016-17", image: p8, viewLink: "https://saath.org/assets/images/Annual_Report-2016-17.pdf", downloadLink: "https://saath.org/assets/images/Annual_Report-2016-17.pdf" },
  { year: "2015-16", image: p9, viewLink: "https://saath.org/assets/images/Annual-Report-2015-16.pdf", downloadLink: "https://saath.org/assets/images/Annual-Report-2015-16.pdf" },
  { year: "2014-15", image: p10, viewLink: "https://saath.org/assets/images/annual-report-2014-15.pdf", downloadLink: "https://saath.org/assets/images/annual-report-2014-15.pdf" },
  { year: "2013-14", image: p11, viewLink: "https://saath.org/assets/images/annual-report-2013-14.pdf", downloadLink: "https://saath.org/assets/images/annual-report-2013-14.pdf" },
  { year: "2012-13", image: p12, viewLink: "https://saath.org/assets/images/annual-report-2012-13.pdf", downloadLink: "https://saath.org/assets/images/annual-report-2012-13.pdf" },
  { year: "2011-12", image: p13, viewLink: "https://saath.org/assets/images/annual-report-2011-12.pdf", downloadLink: "https://saath.org/assets/images/annual-report-2011-12.pdf" },
  { year: "2010-11", image: p14, viewLink: "https://saath.org/assets/images/annual-report-2010-11.pdf", downloadLink: "https://saath.org/assets/images/annual-report-2010-11.pdf" },
  { year: "2009-10", image: p15, viewLink: "https://saath.org/assets/images/annual-report-2009-10.pdf", downloadLink: "https://saath.org/assets/images/annual-report-2009-10.pdf" },
  { year: "2008-09", image: p16, viewLink: "https://saath.org/assets/images/annual-report-2008-09.pdf", downloadLink: "https://saath.org/assets/images/annual-report-2008-09.pdf" },
  { year: "2007-08", image: p17, viewLink: "https://saath.org/assets/images/annual-report-2007-08.pdf", downloadLink: "https://saath.org/assets/images/annual-report-2007-08.pdf" },
  
];

const AnnualReports = () => {
  return (
    <div className="min-h-screen bg-white py-10 px-6 ">
      <div className="bg-[#5A4E8C] text-white text-center py-6">
                <h1 className="text-3xl font-bold">Annual Reports</h1>
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
                        </a> » Annual Reports
                    </p>
                </div>
                </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {reports.map((report, index) => (
          <div
            key={index}
            className="relative h-64 w-full rounded overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            style={{
              backgroundImage: `url(${report.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0  flex flex-col items-center justify-center px-3 text-white">
              <p className="text-sm font-semibold mb-2 text-center">
                Annual Report<br />{report.year}
              </p>
              <div className="flex gap-2">
                <a
                  href={report.viewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-700 hover:bg-purple-800 px-3 py-1 text-xs rounded"
                >
                  View
                </a>
                <a
                  href={report.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-300 text-black hover:bg-gray-400 px-3 py-1 text-xs rounded"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnualReports;