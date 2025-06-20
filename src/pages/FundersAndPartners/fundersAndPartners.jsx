import Picture1 from '../../assets/CarouselImg/mobile-creche.jpg';
import Picture2 from '../../assets/CarouselImg/quest-1.jpg';
import Picture3 from '../../assets/CarouselImg/aif.jpg';
import Picture4 from '../../assets/CarouselImg/godrej.jpg';
import Picture5 from '../../assets/CarouselImg/intas.jpg';
import Picture6 from '../../assets/CarouselImg/nivea.jpg';
import Picture7 from '../../assets/CarouselImg/cii.jpg';
import Picture8 from '../../assets/CarouselImg/caf.jpg';
import Picture9 from '../../assets/CarouselImg/ford.jpg';
import Picture10 from '../../assets/CarouselImg/empower.jpg';
import Picture11 from '../../assets/CarouselImg/Tata-Motors-150x150-1.png';
import Picture12 from '../../assets/CarouselImg/subh5.png';
import Picture13 from '../../assets/CarouselImg/Bakeri-Group-2.png';
import Picture14 from '../../assets/CarouselImg/BSDM-1.png';
import Picture15 from '../../assets/CarouselImg/images2.png';
import Picture16 from '../../assets/CarouselImg/Masoom-3.png';
import Picture17 from '../../assets/CarouselImg/upld_thumb_577237894377618370_ak53318204019771571115496700x700.png';
import Picture18 from '../../assets/CarouselImg/IGSSS-3.png';
import Picture19 from '../../assets/CarouselImg/download-1.png';
import Picture20 from '../../assets/CarouselImg/sm-e_TTy_400x400.png';
import Picture21 from '../../assets/CarouselImg/SBI-Life-Insurance-3.png';
import Picture22 from '../../assets/CarouselImg/USAID-2.png';
import Picture23 from '../../assets/CarouselImg/Vestas-2.png';
import Picture24 from '../../assets/CarouselImg/images-1.png';
import Picture25 from '../../assets/CarouselImg/time-logo.png';
import Picture26 from '../../assets/CarouselImg/iPartner-logo (1).png';
import Picture27 from '../../assets/CarouselImg/subh.png'; 
import Picture28 from '../../assets/CarouselImg/downnload.png';
import Picture29 from '../../assets/CarouselImg/subh3.png';
import Picture30 from '../../assets/CarouselImg/downloadd.jpg';
import Picture31 from '../../assets/CarouselImg/subh4.jpg';
import Picture32 from '../../assets/CarouselImg/subh2.png';
import Picture33 from '../../assets/CarouselImg/unnamed.png';
import Picture34 from '../../assets/CarouselImg/download-3.png';
import Picture35 from '../../assets/CarouselImg/image.png';
import Picture36 from '../../assets/CarouselImg/LO7o-nVD_400x400.png';
import Picture37 from '../../assets/CarouselImg/New-Varuna-Logo-website.jpg';



function FundersAndPartners() {
  return (
    <div className="fundersandPartners">
            {/* Heading Section */}
            <div className="heading bg-[#5A4E8C] text-white text-center py-6">
                <h1 className="text-3xl font-bold">Funders & Partners</h1>
            </div>

            {/* Content Section */}
            <div className="max-w-screen-lg mx-auto px- py-3">
                
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
                        </a> » Funders & Partners

                    </p>

                    
                </div>

        <div className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">

          {/* Sector 1 */}
          
          {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://www.mobilecreches.org/">
                  <img
                    src={Picture1}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://www.questalliance.net/">
                  <img
                    src={Picture2}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}


            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20">
                <a href="https://aif.org/">
                  <img
                    src={Picture3}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20">
                <a href="https://saath.org/funders-partners/#">
                  <img
                    src={Picture4}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
              ))}

              {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20">
                <a href="https://www.intaspharma.com/">
                  <img
                    src={Picture5}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20">
                <a href="https://www.nivea.in/products/campaigns/ext/en-IN/Moms%20Touch">
                  <img
                    src={Picture6}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20">
                <a href="https://saath.org/funders-partners/#">
                  <img
                    src={Picture7}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}
  
            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://saath.org/funders-partners/#">
                  <img
                    src={Picture8}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://www.india.ford.com/about-ford/media/newsroom/">
                  <img
                    src={Picture9}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://empowerweb.org/">
                  <img
                    src={Picture10}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://www.tatamotors.com/about-us/sustainability-approach-reports/">
                  <img
                    src={Picture11}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://www.giveindia.org/m-18-saath-initiatives-for-equity-in-development.aspx">
                  <img
                    src={Picture12}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://www.bakeri.com/">
                  <img
                    src={Picture13}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://saath.org/funders-partners/skillmissionbihar.org">
                  <img
                    src={Picture14}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://www.hyatt.com/">
                  <img
                    src={Picture15}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://masoomeducation.org/">
                  <img
                    src={Picture16}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://savvygroup.in/">
                  <img
                    src={Picture17}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://igsss.org/">
                  <img
                    src={Picture18}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://shreesiddhi.co.in/">
                  <img
                    src={Picture19}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://www.smilefoundationindia.org/">
                  <img
                    src={Picture20}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://www.sbilife.co.in/">
                  <img
                    src={Picture21}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://www.usaid.gov/">
                  <img
                    src={Picture22}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://www.vestas.com/en">
                  <img
                    src={Picture23}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://www.feedingindia.org/">
                  <img
                    src={Picture24}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://www.timetechnoplast.com/">
                  <img
                    src={Picture25}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://ipartnerindia.org/">
                  <img
                    src={Picture26}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://ahmedabadcity.gov.in/">
                  <img
                    src={Picture27}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://girlscount.in/">
                  <img
                    src={Picture28}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://www.macduflaw.com/">
                  <img
                    src={Picture29}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://shivia.com/">
                  <img
                    src={Picture30}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://www.boschrexroth.com/en/in/">
                  <img
                    src={Picture31}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://www.unicef.org/india/">
                  <img
                    src={Picture32}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://www.carmdaksh.org/">
                  <img
                    src=    {Picture33}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://www.psi.org/">
                  <img
                    src={Picture34}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://saath.org/funders-partners/www.pwc.com">
                  <img
                    src=    {Picture35}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="https://www.globalgiving.org/">
                  <img
                    src={Picture36}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            {Array.from({ length: 1 }).map((_, index) => (
              <figure key={index} className="relative w-[250px] mb-6 pr-20 ">
                <a href="http://www.varunapumps.com/">
                  <img
                    src={Picture37}
                    alt={`Sector ${index + 1}`}
                    className="mx-auto rounded-lg shadow"
                  />
                </a>

                
              </figure>
  
            ))}

            


            


          
          
          
          
          
        
        
        </div>

    </div>
        </div>

        </div>
  )
}

export default FundersAndPartners