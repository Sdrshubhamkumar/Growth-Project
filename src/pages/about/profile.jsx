import React from 'react'

function Profile() {
    {document.title = "Profile | Swikar Charitable"}
  return (
    <div className="profile">
        
            {/* Heading Section */}
            <div className="heading bg-[#5A4E8C] text-white text-center py-6">
                <h1 className="text-3xl font-bold">Profile</h1>
            </div>

            {/* Content Section */}
            <div className="max-w-screen-lg mx-auto px-8 py-3">
                
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
                        </a> » Profile

                    </p>
                </div>

                {/* Paragraphs */}
                <p className="mb-6 leading-7 text-lg text-[#767676] ">
                    Swikar Charitable (which in Hindi/Gujarati means ‘together, co-operation, a collective or support’), founded in 1989, 
                    is an NGO in India registered as a Public Charitable Trust and is based in Ahmedabad, Gujarat. Swikar Charitable closely 
                    works with the vulnerable communities and empowers the socially marginalized by providing them livelihood 
                    linkages, imparting skills leading to employment, health and education facilities. The focus areas of Swikar Charitable 
                    are livelihoods, skill development, health and education, rights, urban governance, financial inclusion, 
                    rehabilitation and resettlement and other community development initiatives.
                </p>

                <p className="mb-6 leading-7 text-lg text-[#767676]">
                    Swikar Charitable began as a Charitable Trust that pioneered in rejuvenating underprivileged slums and vulnerable 
                    neighborhoods into self-sustaining and developed communities by its Integrated Community Development Programme, 
                    changing the environment of urban slums. Swikar Charitable through its one-stop centers provides support to slum dwellers 
                    to obtain government identities, access public benefit schemes, impart skills leading to employment, micro-finance 
                    for vital personal consumption and setting up SMEs, and provides access to habitable environments and basic 
                    education.
                </p>

                <p className="mb-6 leading-7 text-lg text-[#767676]">
                    Over the years, Swikar Charitable has partnered with various entities—government, corporates, individuals, and other NGO/NPOs—
                    for several undertakings for the greater good. In the last 30 years, Swikar Charitable has rendered its services to several 
                    slum residents, migrants, minorities, children, women, youth, and vulnerable people in Gujarat, Rajasthan, and 
                    Maharashtra (Mumbai), touching the lives of more than 15 lakh individuals.
                </p>

                <p className="mb-6 leading-7 text-lg text-[#767676]">
                    As Swikar Charitable marches forward with its partners in its journey toward uplifting the marginalized, it continues to expand 
                    the horizon of the communities it serves. In this journey, Swikar Charitable has received several accolades for its programs, 
                    internal systems, organizational ethics, best practices in resource mobilization, and sustainability models—the 
                    latest being the India NGO Award 2014-15 in the Medium category.
                </p>

                <p className="mb-6 leading-7 text-lg text-[#767676]">
                    Swikar Charitable Trust is a non-profit organization focused on empowering underprivileged communities through education, healthcare, skill development,
                    livelihood, Disability and environmental
                    initiatives. We are committed to enhancing
                    the lives of the poor and needy by ensuring
                    access to education, healthcare, sustainable
                    livelihood opportunities, and environmental
                    well-being..
                </p>

                {/* Vision Section */}
                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-2">Vision</h3>
                <p className="mb-6 leading-7 text-lg text-[#767676]">
                    We envision a world where everyone has access
                    to essentials, education, and opportunity—
                    building a brighter future together with our
                    donors, partners, and volunteers.
                </p>

                {/* Mission Section */}
                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-2">Mission</h3>
                <p className="mb-6 leading-7 text-lg text-[#767676]">
                    We empower underprivileged communities
                    through education, healthcare, survival skills,
                    and sustainable development, creating lasting
                    impact and improving lives.

                </p>

                {/* Approach Section */}
                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-2">Approach</h3>
                <p className="mb-6 leading-7 text-lg text-[#767676]">
                    Swikar Charitable engages organizations, corporates, and individuals from India and globally as partners and supporters. 
                    Swikar Charitable initiated the Integrated Community Development Programme, an undertaking that seeks to rejuvenate slums 
                    into vibrant neighborhoods. Swikar Charitable works with slum residents, children, women, youth, and vulnerable people in 
                    urban and rural areas. It addresses multiple needs of the socio-economically vulnerable with one-stop solutions, 
                    through which slum residents have access to basic services for holistic growth. Swikar Charitable collaborates with the 
                    communities, especially the youth, to undertake their upliftment programs. Communities co-invest with Swikar Charitable and 
                    donors for the program implementation and scaling-up.
                </p>

                {/* Theory of Change Section */}
                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-2">Theory of Change</h3>
                <p className="mb-6 leading-7 text-lg text-gray-600">
                    By utilizing Swikar Charitable’s 30 years of experience of working with the communities, its market and need-based innovative 
                    approach within multiple sectors, its reach, and engagement with stakeholders, Swikar Charitable aims to empower 2 lakh 
                    vulnerable families by December 2020. This is achieved by working on their livelihoods, housing (R&R), financial 
                    inclusion, community leadership, and education. To succeed, Swikar Charitable builds the capacity of its team members and 
                    community leaders, uses technology for quality, cost-effectiveness, and monitoring, brings accountability, expands 
                    its current reach, leverages interlinkages, and secures more funds by adopting new approaches and tapping into 
                    new sources.
                </p>
            </div>
        </div>
    
  )
}

export default Profile