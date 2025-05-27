import React from 'react'

function History() {
  return (
    <div className="history">
      {/* Heading Section */}
      <div className="bg-[#5A4E8C] text-white text-center py-6">
        <h1 className="text-3xl font-bold">History</h1>
      </div>
      

      {/* Timeline Section */}
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
                        </a> » History
                    </p>
                </div>
        {/* 1989 Section */}
        <section className="divide-y divide-gray-300">
          {/* 1989 Section */}
          <article className="flex flex-col md:flex-row md:items-start py-4">
            <div className="md:w-1/4 pr-6 mb-4 md:mb-0">
              <h2 className="font-extrabold text-gray-900 text-base md:text-lg mb-1">1989</h2>
              <div className="w-10 h-[2px] bg-[#6B5F8F] mb-2"></div>
              <p className="text-gray-500 text-sm">Saath Established</p>
            </div>
            <ul className="md:w-3/4 text-gray-600 text-sm list-disc list-inside space-y-1">
              <li>Saath registered as a Trust.</li>
              <li>Integrated Slum Development Program (ISDP) conceptualized.</li>
              <li>Saath Founders approached community to initiate youth activities.</li>
              <li>Conducted Social Animators course for slum youth.</li>
            </ul>
          </article>

          {/* 1990-92 Section */}
          <article className="flex flex-col md:flex-row md:items-start py-4">
            <div className="md:w-1/4 pr-6 mb-4 md:mb-0">
              <h2 className="font-extrabold text-gray-900 text-base md:text-lg mb-1">1990-92</h2>
              <div className="w-14 h-[2px] bg-[#6B5F8F] mb-2"></div>
              <p className="text-gray-500 text-sm ">Community leadership<br />Building</p>
            </div>
            <ul className="md:w-3/4 text-gray-600 text-sm list-disc list-inside space-y-1">
              <li>Through Social Animators course youth conducted survey in the slum to identify the problems faced by the people.</li>
              <li>Registration of a community-based organisation (CBO) called Ekta Yuva Mandal and started a savings group.</li>
              <li>Local community leadership established for program planning and management.</li>
              <li>AMC’s subsidy scheme – 80:20 toilet construction implemented in Behrampura through revolving loans.</li>
            </ul>
          </article>

          {/* 1993-1994 Section */}
          <article className="flex flex-col md:flex-row md:items-start py-4">
            <div className="md:w-1/4 pr-6 mb-4 md:mb-0">
              <h2 className="font-extrabold text-gray-900 text-base md:text-lg mb-1">1993-1994</h2>
              <div className="w-12 h-[2px] bg-[#6B5F8F] mb-2"></div>
              <p className="text-gray-500 text-sm leading-snug">Riots & Floods</p>
            </div>
            <ul className="md:w-3/4 text-gray-600 text-sm list-disc list-inside space-y-1">
              <li>2296 households covered during the Ayodhya – Babri riots.</li>
              <li>Rehabilitation and Resettlement work in Ahmedabad.</li>
              <li>Women from the area were selected as health workers and teachers for the implementation of the program in the community.</li>
            </ul>
          </article>

          {/* 1995 Section */}
          <article className="flex flex-col md:flex-row md:items-start py-4">
            <div className="md:w-1/4 pr-6 mb-4 md:mb-0">
              <h2 className="font-extrabold text-gray-900 text-base md:text-lg mb-1">1995</h2>
              <div className="w-10 h-[2px] bg-[#6B5F8F] mb-2"></div>
              <p className="text-gray-500 text-sm">Slum Networking Project</p>
            </div>
            <ul className="md:w-3/4 text-gray-600 text-sm list-disc list-inside space-y-1">
              <li>SNP Initiated by Saath, Ahmedabad Municipal Corporation and Sharda Trust, First Pilot Project Implemented.</li>
              <li>Capacity building of local community associations.</li>
              <li>SNP pilot conducted in Sanjaynagar. CBO members got the opportunity to impart skills among the community and establish linkages with referral hospitals.</li>
            </ul>
          </article>

          {/* 1996 Section */}
          <article className="flex flex-col md:flex-row md:items-start py-4">
            <div className="md:w-1/4 pr-6 mb-4 md:mb-0">
              <h2 className="font-extrabold text-gray-900 text-base md:text-lg mb-1">1996</h2>
              <div className="w-10 h-[2px] bg-[#6B5F8F] mb-2"></div>
              <p className="text-gray-500 text-sm">Credit Linkage</p>
            </div>
            <ul className="md:w-3/4 text-gray-600 text-sm list-disc list-inside space-y-1">
              <li>Sakhi Mahila Mandal registered for savings and credit activities. Women from different castes and religions were members of this group.</li>
            </ul>
          </article>

          {/* 1997-2000 Section */}
          <article className="flex flex-col md:flex-row md:items-start py-4">
            <div className="md:w-1/4 pr-6 mb-4 md:mb-0">
              <h2 className="font-extrabold text-gray-900 text-base md:text-lg mb-1">1997-2000</h2>
              <div className="w-14 h-[2px] bg-[#6B5F8F] mb-2"></div>
              <p className="text-gray-500 text-sm">Completion of SNP</p>
            </div>
            <ul className="md:w-3/4 text-gray-600 text-sm list-disc list-inside space-y-1">
              <li>Completion of SNP in Gujarat and city-wide expansion initiated.</li>
              <li>Formalization of activities into various sectors and programs.</li>
              <li>ISDP as a replicable model was successfully implemented in the field.</li>
              <li>Setting up of the Research and Documentation Cell.</li>
              <li>Livelihood activities expanded to include vegetable sorting & job work for sewing.</li>
            </ul>
          </article>

          {/* 2001 Section */}
          <article className="flex flex-col md:flex-row md:items-start py-4">
            <div className="md:w-1/4 pr-6 mb-4 md:mb-0">
              <h2 className="font-extrabold text-gray-900 text-base md:text-lg mb-1">2001</h2>
              <div className="w-10 h-[2px] bg-[#6B5F8F] mb-2"></div>
              <p className="text-gray-500 text-sm">The Earthquake</p>
            </div>
            <ul className="md:w-3/4 text-gray-600 text-sm list-disc list-inside space-y-1">
              <li>CBO members actively involved in relief work during the earthquake in Kutch.</li>
              <li>Saath covered 2204 households of 17 villages of Khadir and Rapar during the earthquake.</li>
              <li>After rapid assessment, local groups were formed and given training for relief work.</li>
              <li>Successful Slum Electrification pilot program.</li>
            </ul>
          </article>

          <article className="flex flex-col md:flex-row md:items-start py-4">
            <div className="md:w-1/4 pr-6 mb-4 md:mb-0">
              <h2 className="font-extrabold text-gray-900 text-base md:text-lg mb-1">2002</h2>
              <div className="w-10 h-[2px] bg-[#6B5F8F] mb-2"></div>
              <p className="text-gray-500 text-sm">Communal Riots and Saath's Stand</p>
            </div>
            <ul className="md:w-3/4 text-gray-600 text-sm list-disc list-inside space-y-1">
              <li>Participated in relief and rehabilitation work during communal riots across the city.</li>
              <li>Worked with riot-affected slum pockets for overall development and conflict resolution of vulnerable groups.</li>
              <li>In coordination with CBOs, participated in the Gujarat Harmony Project for reconstruction of houses.</li>
              <li>Saath partnered with CBOs for undertaking research for the formulation of the Draft Gujarat State Urban Slum Policy and participatory poverty assessments.</li>
              <li>Facilitated the registration of Sankalp Mitra Mandal–CBO in Sankalitnagar, Juhapura.</li>
            </ul>
          </article>

          {/* 2003 Section */}
          <article className="flex flex-col md:flex-row md:items-start py-4">
            <div className="md:w-1/4 pr-6 mb-4 md:mb-0">
              <h2 className="font-extrabold text-gray-900 text-base md:text-lg mb-1">2003</h2>
              <div className="w-10 h-[2px] bg-[#6B5F8F] mb-2"></div>
              <p className="text-gray-500 text-sm">Building Credibility and Scaling Up</p>
            </div>
            <ul className="md:w-3/4 text-gray-600 text-sm list-disc list-inside space-y-1">
              <li>Slum electrification scaled up in Juhapura area, covering 5000 households and subsequently across Ahmedabad.</li>
              <li>Partnered with Handicap International for participatory assessment of disabled persons in various towns of Gujarat.</li>
              <li>
                Saath’s governance, financial, and management systems complied with global norms laid down by ‘Credibility Alliance’ and Give Foundation.
                In a rating of 1342 NGOs by the Planning Commission of India, Saath ranked 281st in India and 7th among 50 in Gujarat.
              </li>
              <li>Towards institutionalization and better governance, set up gender, personnel, monitoring, and evaluation policies.</li>
            </ul>
          </article>

          {/* 2004 Section */}
          <article className="flex flex-col md:flex-row md:items-start py-4">
            <div className="md:w-1/4 pr-6 mb-4 md:mb-0">
              <h2 className="font-extrabold text-gray-900 text-base md:text-lg mb-1">2004</h2>
              <div className="w-14 h-[2px] bg-[#6B5F8F] mb-2"></div>
              <p className="text-gray-500 text-sm">Geographic Expansion</p>
            </div>
            <ul className="md:w-3/4 text-gray-600 text-sm list-disc list-inside space-y-1">
              <li>RCH-Jeevandaan (Mother & Child Care Program) started in partnership with AMC and Counterpart International.</li>
              <li>AMC & SAATH collaborated to run 191 Anganwadis managed and monitored by SMM in 25 wards.</li>
              <li>Conceptualization of the Urmila Home Manager program.</li>
            </ul>
          </article>

          <article className="flex flex-col md:flex-row md:items-start py-4">
            <div className="md:w-1/4 pr-6 mb-4 md:mb-0">
              <h2 className="font-extrabold text-gray-900 text-base md:text-lg mb-1">2005-2006</h2>
              <div className="w-14 h-[2px] bg-[#6B5F8F] mb-2"></div>
              <p className="text-gray-500 text-sm">Livelihood Focus</p>
            </div>
            <ul className="md:w-3/4 text-gray-600 text-sm list-disc list-inside space-y-1">
              <li>Formulation and documentation of Saath’s Vision for the next ten years.</li>
              <li>Initiation of the Ek Mouka Udaan Project in Ahmedabad with AMC.</li>
              <li>Negotiated with AUDA to provide basic infrastructure and services in Sanklitnagar, in coordination with Sankalp-CBO.</li>
              <li>Implemented the Urmila Home Manager program.</li>
              <li>The Snehal Project started to support artisans in Surendranagar, funded by CARE and in partnership with NIFT in 25 villages.</li>
              <li>Natural Resources Management initiated with rural communities in Rajkot district.</li>
            </ul>
          </article>

          {/* 2007 Section */}
          <article className="flex flex-col md:flex-row md:items-start py-4">
            <div className="md:w-1/4 pr-6 mb-4 md:mb-0">
              <h2 className="font-extrabold text-gray-900 text-base md:text-lg mb-1">2007</h2>
              <div className="w-10 h-[2px] bg-[#6B5F8F] mb-2"></div>
              <p className="text-gray-500 text-sm">Institutional Expansion & Recognition</p>
            </div>
            <ul className="md:w-3/4 text-gray-600 text-sm list-disc list-inside space-y-1">
              <li>Registration of Saath Livelihoods Services as a Section 25 company.</li>
              <li>Renamed Ek Mouka Udaan to Umeed, supported by GUDM, and expanded to 8 districts in Gujarat through 55 centres.</li>
              <li>Established 4 Urban Resource Centers in Ahmedabad.</li>
            </ul>
          </article>

          {/* 2008 Section */}
          <article className="flex flex-col md:flex-row md:items-start py-4">
            <div className="md:w-1/4 pr-6 mb-4 md:mb-0">
              <h2 className="font-extrabold text-gray-900 text-base md:text-lg mb-1">2008</h2>
              <div className="w-14 h-[2px] bg-[#6B5F8F] mb-2"></div>
              <p className="text-gray-500 text-sm">Outreach and Building Credibility</p>
            </div>
            <ul className="md:w-3/4 text-gray-600 text-sm list-disc list-inside space-y-1">
              <li>SUVAS (Surendranagar Vankar Samiti) registered as a Federation of over 2000 weavers (Patola, Tangaliya, cotton).</li>
              <li>Umeed expanded to Rajasthan with support from the Rajasthan Mission of Livelihoods.</li>
              <li>Partnered with IIM and AMC to develop a Public-Private Partnership model for managing urban health in Ahmedabad.</li>
              <li>Child Rights for Change program launched in 120 villages of Dholka and Viramgam with support from Save the Children, funded by IKEA.</li>
            </ul>
          </article>

          <article className="flex flex-col md:flex-row md:items-start py-4">
            <div className="md:w-1/4 pr-6 mb-4 md:mb-0">
              <h2 className="font-extrabold text-gray-900 text-base md:text-lg mb-1">2009-2010</h2>
              <div className="w-10 h-[2px] bg-[#6B5F8F] mb-2"></div>
              <p className="text-gray-500 text-sm">Rweaves Brand Launched</p>
            </div>
            <ul className="md:w-3/4 text-gray-600 text-sm list-disc list-inside space-y-1">
              <li>Launched Griha Pravesh, a program started to facilitate purchase of affordable houses.</li>
              <li>Rweaves brand created to promote Patola and Tangaliya artisans' work.</li>
              <li>Merger of Cooperatives into the Saath Savings and Credit Cooperative Ltd.</li>
            </ul>
          </article>

          {/* 2011-2012 Section */}
          <article className="flex flex-col md:flex-row md:items-start py-4">
            <div className="md:w-1/4 pr-6 mb-4 md:mb-0">
              <h2 className="font-extrabold text-gray-900 text-base md:text-lg mb-1">2011-2012</h2>
              <div className="w-14 h-[2px] bg-[#6B5F8F] mb-2"></div>
              <p className="text-gray-500 text-sm">Change in Leadership</p>
            </div>
            <ul className="md:w-3/4 text-gray-600 text-sm list-disc list-inside space-y-1">
              <li>Rajendra Joshi retires from executive functions.</li>
              <li>Ms. Keren Nazareth appointed as an Executive Director and Mr. Niraj Jani as Associate Director of Saath.</li>
              <li>Nirman – Skill building program for construction workers launched.</li>
            </ul>
          </article>

          {/* 2013-2014 Section */}
          <article className="flex flex-col md:flex-row md:items-start py-4">
            <div className="md:w-1/4 pr-6 mb-4 md:mb-0">
              <h2 className="font-extrabold text-gray-900 text-base md:text-lg mb-1">2013-2014</h2>
              <div className="w-14 h-[2px] bg-[#6B5F8F] mb-2"></div>
              <p className="text-gray-500 text-sm">Presence in Other Cities</p>
            </div>
            <ul className="md:w-3/4 text-gray-600 text-sm list-disc list-inside space-y-1">
              <li>Launched the Youth Force Program covering Ahmedabad, Vadodara, Surat, Rajkot in Gujarat and Mumbai.</li>
              <li>Launched the Housing Rights Program for Gujarat.</li>
              <li>URC launched in Rajkot with RMC.</li>
              <li>Housing Rights and Governance initiative in Gujarat.</li>
            </ul>
          </article>

          {/* 2015-2016 Section */}
          <article className="flex flex-col md:flex-row md:items-start py-4">
            <div className="md:w-1/4 pr-6 mb-4 md:mb-0">
              <h2 className="font-extrabold text-gray-900 text-base md:text-lg mb-1">2015-2016</h2>
              <div className="w-14 h-[2px] bg-[#6B5F8F] mb-2"></div>
              <p className="text-gray-500 text-sm">Short Circuit in Head Office</p>
            </div>
            <ul className="md:w-3/4 text-gray-600 text-sm list-disc list-inside space-y-1">
              <li>Received India NGO Award.</li>
              <li>Awarded with the Guide Star Platinum Transparency Award.</li>
              <li>Awarded the HUDCO Award.</li>
              <li>Business Gym, Women @ Work, and Salon I programs initiated.</li>
              <li>On the 1st of April, the short circuit tax was set on fire at the accompanying Head Office.</li>
            </ul>
          </article>

          <article className="flex flex-col md:flex-row md:items-start py-4">
            <div className="md:w-1/4 pr-6 mb-4 md:mb-0">
              <h2 className="font-extrabold text-gray-900 text-base md:text-lg mb-1">2017-18</h2>
              <div className="w-10 h-[2px] bg-[#6B5F8F] mb-2"></div>
              <p className="text-gray-500 text-sm">Awards and Innovations</p>
            </div>
            <ul className="md:w-3/4 text-gray-600 text-sm list-disc list-inside space-y-1">
              <li>Certificate of Appreciation under HUDCO Award.</li>
              <li>Leadership Award, 2018-19 from Gujarat CSR received. Inspire Award, 2018-19 received.</li>
              <li>SROI Analysis conducted for Saath Interventions.</li>
            </ul>
          </article>

          {/* 2019 Section */}
          <article className="flex flex-col md:flex-row md:items-start py-4">
            <div className="md:w-1/4 pr-6 mb-4 md:mb-0">
              <h2 className="font-extrabold text-gray-900 text-base md:text-lg mb-1">2019</h2>
              <div className="w-14 h-[2px] bg-[#6B5F8F] mb-2"></div>
              <p className="text-gray-500 text-sm">30 Years Journey Celebration</p>
            </div>
            <ul className="md:w-3/4 text-gray-600 text-sm list-disc list-inside space-y-1">
              <li>Saath initiated the set-up of Rweaves – A studio for Rural Art Weavers in Ahmedabad.</li>
              <li>Mehnat Manzil (Museum of Work) inaugurated in collaboration with Conflictorium.</li>
              <li>“SMART CITIES – BREAKING THE POVERTY BARRIER” – book launched by Mr. Rajendra Joshi.</li>
            </ul>
          </article>

          {/* 2020-21 Section */}
          <article className="flex flex-col md:flex-row md:items-start py-4">
            <div className="md:w-1/4 pr-6 mb-4 md:mb-0">
              <h2 className="font-extrabold text-gray-900 text-base md:text-lg mb-1">2020-21</h2>
              <div className="w-14 h-[2px] bg-[#6B5F8F] mb-2"></div>
              <p className="text-gray-500 text-sm">Covid-19 Response Support</p>
            </div>
            <ul className="md:w-3/4 text-gray-600 text-sm list-disc list-inside space-y-1">
              <li>8000+ Ration Kits distributed to families affected by the COVID-19 lockdown.</li>
              <li>Free reusable sanitary pad kits distributed to 12000+ schoolgirls in collaboration with TGB Charity and Unipads.</li>
              <li>A community-led intervention for COVID-19 response initiated under UNICEF.</li>
              <li>SAMAGRA Project initiated in collaboration with USAID and PSI.</li>
              <li>Saath partnered with ElderAid to provide end-to-end services for senior citizens in Ahmedabad.</li>
              <li>Saath Facilitators Pvt. Ltd. website launched.</li>
            </ul>
          </article>

        </section>

        {/* Additional Sections can be added here */}
        </div>
    </div>
  )
}

export default History