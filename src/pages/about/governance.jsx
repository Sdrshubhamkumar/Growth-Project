import React from 'react'
import organogram from '../../Assets/Organogram.jpg';

function Governance() {
  return (
    
         <div className="governance">
            {/* Heading Section */}
            <div className="bg-[#5A4E8C] text-white text-center py-6">
                <h1 className="text-3xl font-bold">Governance</h1>
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
                        </a> » Governance
                    </p>
                </div>

                {/* Description Section */}
                <p className="mb-6 leading-7 text-lg text-[#767676]">
                    The SAATH Board is made up of experts in the field of urban planners, rural management, environmental management, research, 
                    community mobilisation, judiciary experience, public policy and urban governance. The Board plays an advisory, facilitative 
                    and supportive role within the organization. They participate in its Organizational Development processes, governance, 
                    training, financial management, networking for SAATH, operational management and resource mobilisation efforts. Board members 
                    have been an integral part of the re-visioning process and also are Brand Ambassadors for Saath’s work.
                </p>
                
                <p className="mb-6 leading-7 text-lg text-[#767676]">
                    Board members are identified from within the field of academics, governance and other related fields to the programmes and 
                    work of the organisation. Recommendations are made by existing board members or other funders, collaborators, partners. All 
                    referrals are discussed within the Board and members are selected and appointed unanimously by the Board. The Board has a policy 
                    of rotation every two years, this is when new members are identified and inducted into the board. So far any renewal is based on 
                    the unanimous decision of the Board or on a case to case basis if required.
                </p>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Advisors</h3>
                <p className="mb-6 leading-7 text-lg text-[#767676]">
                    Mr. Gagan Sethi and Ms. Gazala Paul are Advisors to the Saath Board.
                </p>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Human Resources</h3>
                <p className="mb-6 leading-7 text-lg text-[#767676]">
                    SAATH has a well-documented HR policy that was revised in the past year through a process of consultation with project and programme teams, 
                    Strategic Management.
                </p>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Organogram</h3>
                <img className="block mx-auto w-full h-auto rounded-lg shadow" src={organogram} alt="Organogram" />

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Committees</h3>
                <ul className="list-disc ml-6 space-y-4 text-[#767676]">
                    <li>
                        <strong>Strategic Management Group –</strong> Strategic Management Group monitors programs progress, growth, and development in congruence 
                        with the vision and mission of organization and relevance. The committee comprises Programme Coordinators, Accounts Head, Programme Director, 
                        Executive Director, and Community Leaders.
                    </li>
                    <li>
                        <strong>Anti Sexual Harassment Committee –</strong> This committee is made up of 4 members including 3 members from within the organization 
                        and one external member from non-governmental association. This committee is formed as part of Anti-sexual harassment Policy and as per the 
                        guidelines of “The Sexual Harassment of at workplace (Prevention, Prohibition and Redressal) Act 2013.”
                    </li>
                    <li>
                        <strong>Fundraising Committee –</strong> Comprises Founder Trustee, Executive Director, Associate Director, Urban Program Director, and 
                        Fundraising Manager. It is responsible for fundraising and local resource mobilisation.
                    </li>
                    <li>
                        <strong>Human Resource Committee –</strong> It is set up every year and comprises senior leaders and community leaders with the Executive 
                        Director as the mandatory member. The committee is for evaluation of performance and appraisal of staff.
                    </li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Policies at Saath</h3>
                <p className="mb-6 leading-7 text-lg text-[#767676]">
                    The Policies and practices of Saath are a working formulation, collectively decided for smooth functioning of the organization and also to meet the 
                    aspirations of the staff to meet social obligations. It provides a framework for management of human resources, guidelines for various procedures 
                    along with rules and regulations.
                </p>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">List of Policies</h3>
                <ol className="list-decimal ml-6 space-y-2 text-[#767676]">
                    <li>Personnel Policy</li>
                    <li>Authorisation Policy and Procedure</li>
                    <li>Purchase Policy</li>
                    <li>Loan Policy</li>
                    <li>Provisional Advances</li>
                    <li>Annual Increment, Performance Appraisal, Grade and Scale</li>
                    <li>SOP Recruitment</li>
                    <li>Travel Rules for Outstation</li>
                    <li>Use of own vehicle rate</li>
                    <li>Insurance Policy</li>
                    <li>Consultancy Policy</li>
                    <li>Child Protection Policy</li>
                    <li>Anti-Sexual Harassment Policy</li>
                    <li>Gender Policy</li>
                    <li>Women Allowance</li>
                    <li>Conflict of Interest Policy</li>
                    <li>Saath Finance Protocol</li>
                    <li>Rotation Policy</li>
                    <li>Managing Trustee’s Role and Responsibility</li>
                </ol>
            </div>
        </div>
    
  )
}

export default Governance