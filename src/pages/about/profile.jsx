import React from 'react'

function Profile() {
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
                            href="https://saath.org/"
                        >
                            Home
                        </a> » Profile

                    </p>
                </div>

                {/* Paragraphs */}
                <p className="mb-6 leading-7 text-lg text-[#767676]s ">
                    Saath (which in Hindi/Gujarati means ‘together, co-operation, a collective or support’), founded in 1989, 
                    is an NGO in India registered as a Public Charitable Trust and is based in Ahmedabad, Gujarat. Saath closely 
                    works with the vulnerable communities and empowers the socially marginalized by providing them livelihood 
                    linkages, imparting skills leading to employment, health and education facilities. The focus areas of Saath 
                    are livelihoods, skill development, health and education, rights, urban governance, financial inclusion, 
                    rehabilitation and resettlement and other community development initiatives.
                </p>

                <p className="mb-6 leading-7 text-lg text-[#767676]">
                    Saath began as a Charitable Trust that pioneered in rejuvenating underprivileged slums and vulnerable 
                    neighborhoods into self-sustaining and developed communities by its Integrated Community Development Programme, 
                    changing the environment of urban slums. Saath through its one-stop centers provides support to slum dwellers 
                    to obtain government identities, access public benefit schemes, impart skills leading to employment, micro-finance 
                    for vital personal consumption and setting up SMEs, and provides access to habitable environments and basic 
                    education.
                </p>

                <p className="mb-6 leading-7 text-lg text-[#767676]">
                    Over the years, Saath has partnered with various entities—government, corporates, individuals, and other NGO/NPOs—
                    for several undertakings for the greater good. In the last 30 years, Saath has rendered its services to several 
                    slum residents, migrants, minorities, children, women, youth, and vulnerable people in Gujarat, Rajasthan, and 
                    Maharashtra (Mumbai), touching the lives of more than 15 lakh individuals.
                </p>

                <p className="mb-6 leading-7 text-lg text-[#767676]">
                    As Saath marches forward with its partners in its journey toward uplifting the marginalized, it continues to expand 
                    the horizon of the communities it serves. In this journey, Saath has received several accolades for its programs, 
                    internal systems, organizational ethics, best practices in resource mobilization, and sustainability models—the 
                    latest being the India NGO Award 2014-15 in the Medium category.
                </p>

                {/* Vision Section */}
                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-2">Vision</h3>
                <p className="mb-6 leading-7 text-lg text-[#767676]">
                    Saath envisions inclusive and empowered communities and individuals.
                </p>

                {/* Mission Section */}
                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-2">Mission</h3>
                <p className="mb-6 leading-7 text-lg text-[#767676]">
                    To make human settlements equitable living environments where all residents and vulnerable people have access 
                    to health, education, essential infrastructure services and livelihood options, irrespective of their economic 
                    and social status.
                </p>

                {/* Approach Section */}
                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-2">Approach</h3>
                <p className="mb-6 leading-7 text-lg text-[#767676]">
                    Saath engages organizations, corporates, and individuals from India and globally as partners and supporters. 
                    Saath initiated the Integrated Community Development Programme, an undertaking that seeks to rejuvenate slums 
                    into vibrant neighborhoods. Saath works with slum residents, children, women, youth, and vulnerable people in 
                    urban and rural areas. It addresses multiple needs of the socio-economically vulnerable with one-stop solutions, 
                    through which slum residents have access to basic services for holistic growth. Saath collaborates with the 
                    communities, especially the youth, to undertake their upliftment programs. Communities co-invest with Saath and 
                    donors for the program implementation and scaling-up.
                </p>

                {/* Theory of Change Section */}
                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-2">Theory of Change</h3>
                <p className="mb-6 leading-7 text-lg text-gray-600">
                    By utilizing Saath’s 30 years of experience of working with the communities, its market and need-based innovative 
                    approach within multiple sectors, its reach, and engagement with stakeholders, Saath aims to empower 2 lakh 
                    vulnerable families by December 2020. This is achieved by working on their livelihoods, housing (R&R), financial 
                    inclusion, community leadership, and education. To succeed, Saath builds the capacity of its team members and 
                    community leaders, uses technology for quality, cost-effectiveness, and monitoring, brings accountability, expands 
                    its current reach, leverages interlinkages, and secures more funds by adopting new approaches and tapping into 
                    new sources.
                </p>
            </div>
        </div>
    
  )
}

export default Profile