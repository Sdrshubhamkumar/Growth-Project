import ParaImage from './para-image/paraImage'
import image1 from '../../assets/innovation/img1.png'
import image2 from '../../assets/innovation/img2.png'
import image3 from '../../assets/innovation/img3.png'

function innovations() {
    return (
        <div className='ml-[-30px]'>
            <div className="header pt-5 pb-5 text-center h-25 w-full bg-[#6a5f97]">
                <h1 className='text-4xl font-bold text-white'>Innovations</h1>
            </div>
            <div className='text-container text-[#838383] p-20 pt-10 pb-10'>
                <p className="mb-4">
                    At Swikar Charitable Trust, innovation is the engine driving our impact. We believe in designing practical, scalable solutions to real-world problems — led by empathy, backed by data, and driven by community needs.
                </p>
                <h2 className="text-2xl font-semibold mt-6 mb-2">Breakthrough Approaches</h2>
                <div className="mb-4 space-y-4">
                    <p>
                        <strong>Agroforestry + Carbon Credits:</strong>
                        We empower small farmers by integrating agroforestry practices that not only improve soil fertility and biodiversity but also generate income through carbon credit systems. This dual benefit creates long-term financial sustainability and environmental resilience.
                    </p>
                    <p>
                        <strong>Zero-Waste Zones:</strong>
                        Our rural zero-waste initiatives transform neglected areas into models of sustainable living. By setting up plastic and paper recycling units, we create local jobs, reduce landfill load, and promote eco-conscious behavior in underserved communities.
                    </p>
                    <p>
                        <strong>Inclusive Tech Learning:</strong>
                        We bridge the digital divide by equipping government schools and rural children with access to STEM learning tools, computers, and interactive tech modules. These labs ignite curiosity and prepare students for a rapidly evolving digital world.
                    </p>
                    <p>
                        <strong>Community CPR & Health Demos:</strong>
                        Recognizing the lack of emergency preparedness in rural areas, we organize hands-on CPR training and health demonstrations. These sessions empower individuals to save lives, respond confidently in crises, and take charge of their well-being.
                    </p>
                </div>
            </div>

            <ParaImage className="md:grid-cols-4 sm:grid-cols-4 pt-0 pb-0" images={[image1, image2, image3]} />

            <div className='text-container text-[#838383] p-20 pt-5 pb-15'>
                <h2 className="text-2xl font-semibold mt-6 mb-4">Our Values</h2>
                <p className="mb-4">
                    Every innovation we make reflects our core values: Integrity in bringing meaningful change, Innovation in how underserved communities view their potential, Equity in access, Eco Balance in every initiative, and Empowerment for future generations. Together, we turn challenges into opportunities, and ideas bloom into outcomes that were once only dreams.
                </p>

                <p className="mb-4">
                    Our approach is not just project-based — it's people-first. We work hand-in-hand with community members, school leaders, local health workers, and farmers to co-design solutions that are both relevant and resilient. This participatory model ensures true ownership and long-term adoption of every innovation we introduce.
                </p>

                <p className="mb-4">
                    What begins as a localized intervention is always designed with scalability in mind. Whether it's a STEM lab in a rural school or a recycling unit in a slum cluster, our goal is to create blueprints that can be replicated across regions, adapted by partners, and multiplied in impact without losing local context.
                </p>
            </div>

        </div>
    )
}

export default innovations