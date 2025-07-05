import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Profile from './pages/about/profile';
import Impact from './pages/Impact/impact';
import Navbar from './components/Navbar/Navbar'; // Use consistent capitalization
// About pages
import History from './pages/about/history';
// import BoardOfTrustees from './pages/about/boardOfTrustees';
import Governance from './pages/about/governance';
import SwikarCharitableInstitutionalPartners from './pages/about/SwikarCharitableInstitutionalPartners';
// Other pages 
// import FundersAndPartners from './pages/FundersAndPartners/fundersAndPartners';
// import Publications from './pages/Resources/Publications';

import AnnualReports from './pages/Resources/AnnualReports';


import InternReports from './pages/Resources/internReports';

import CSR from './pages/csr/csr'; 
import Innovations from './pages/innovations/innovations';
// Sector pages
import Education from './pages/Sectors/Education';
import Health from './pages/Sectors/Health';
import LivelyHoods from './pages/Sectors/LivelyHoods';
// import Divyang from './pages/Sectors/Divyang';
import Environment from './pages/Sectors/Environment';
import Divyang from './pages/Sectors/Divyang';
import GetInvolved from './pages/GetInvolved/GetInvolved';
// import Awards from './pages/Awards/Awards';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        {/* <Route path="/board-of-trustees" element={<BoardOfTrustees />} /> */}
        <Route path="/governance" element={<Governance />} />
        <Route path="/Swikar-Charitable-Institutional-Partners" element={<SwikarCharitableInstitutionalPartners/>} />
        {/* <Route path="/founders-&-partners" element={<FundersAndPartners />} /> */}
        {/* <Route path="/publications" element={<Publications />} /> */}
        <Route path="/annual-reports" element={<AnnualReports />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/intern-reports" element={<InternReports />} />
        <Route path="/csr" element={<CSR />} />
        <Route path="/innovations" element={<Innovations />} />
        <Route path="/education" element={<Education />} />
        <Route path="/health" element={<Health />} />
        <Route path="/livelyhoods" element={<LivelyHoods />} />
        <Route path= "/divyang" element = {<Divyang/>}/>
        <Route path="/environment" element={<Environment />} />
        <Route path = "/get-involved"element={<GetInvolved/>}/>
        {/* <Route path = "/Awards"element={<Awards/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
