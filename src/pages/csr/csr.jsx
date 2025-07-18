import image from "../../assets/csr/csrImg.png";

function csr() {
  {document.title = "CSR | Swikar Charitable"}
  return (
    <div className="ml-[-30px]">
      <div className="header pt-5 pb-5 pl-10 text-center h-25 w-full bg-[#6a5f97]">
        <h1 className="text-4xl font-bold text-white ">
          CORPORATE SOCIAL RESPONSIBILITY
        </h1>
      </div>
      <div className="text-container text-[#838383] p-20 pt-10 pb-15">
        <p className="mb-4">
          Swikar Charitable Trust, we channel CSR funds into transformative
          initiatives that create lasting social impact. Every contribution is a
          step toward sustainable development—ethically managed, transparently
          reported, and community-driven
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Our Value</h2>
        <p className="mb-4">
          Integrity, Innovation, Equity Erase, Inflation, Eco Balance
        </p>

        <img
          src={image}
          alt="csrImage"
          className="h-[300px] w-[525px] m-auto mt-[50px] mb-[50px]"
        />

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Why Partner With Us?
        </h2>

        <div className="mb-4 space-y-4">
          <p>
            <strong>Proven Impact –</strong>
            Education, healthcare & livelihood program that uplift underserved
            communities.
          </p>
          <p>
            <strong>Full Accountability –</strong>
            Detailed financial reports & on-ground progress updates
          </p>
          <p>
            <strong>Collaborative Approach –</strong>
            Working alongside NGOs, corporations, and beneficiaries for scalable
            solutions.
          </p>
          <p>
            <strong>Community CPR & Health Demos:</strong>
            Recognizing the lack of emergency preparedness in rural areas, we
            organize hands-on CPR training and health demonstrations. These
            sessions empower individuals to save lives, respond confidently in
            crises, and take charge of their well-being.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Our Focus Areas:</h2>

        <div className="mb-4 space-y-4">
          <p>
            <strong>Education –</strong>
            Scholarships, digital learning, and school infrastructure
          </p>
          <p>
            <strong>Environment –</strong>
            Afforestation, waste management, and clean energy.
          </p>
          <p>
            <strong>Healthcare –</strong>
            Medical camps, nutrition programs, and rural health support
          </p>
        </div>

        <p className="mb-4">
          When you invest in Swikar, you invest in a future which is built on
          trust of the community, accountability, equity, and most importantly
          change that affect the lives of millions in real time.
        </p>
      </div>
    </div>
  );
}

export default csr;
