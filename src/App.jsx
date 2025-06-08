import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Profile from './pages/about/profile';
import Impact from './pages/Impact/impact';
import Navbar from './components/Navbar/Navbar';

// About pages
import History from './pages/about/history';
import BoardOfTrustees from './pages/about/boardOfTrustees';
import Governance from './pages/about/governance';
import SaathInstitutionalPartners from './pages/about/saathInstitutionalPartners';
// Other pages
import FundersAndPartners from './pages/fundersAndPartners/fundersAndPartners';
import Publications from './pages/Resources/Publications';
import AnnualReports from './pages/Resources/annualReports';
import CSR from './pages/csr/csr'; 
import Innovations from './pages/innovations/innovations';

// Sector pages
import Education from './pages/Sectors/Education';
import Health from './pages/Sectors/Health';
import LivelyHoods from './pages/Sectors/LivelyHoods';
import UrbanGovernance from './pages/Sectors/UrbanGovernance';
import GetInvolved from './pages/GetInvolved/GetInvolved';
import Awards from './pages/Awards/Awards';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/board-of-trustees" element={<BoardOfTrustees />} />
        <Route path="/governance" element={<Governance />} />
        <Route path="/saath-institutional-partners" element={<SaathInstitutionalPartners />} />
        <Route path="/Funders&Partners" element={<FundersAndPartners />} />
        <Route path="/Publications" element={<Publications />} />
        <Route path="/Annual-reports" element={<AnnualReports />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/csr" element={<CSR />} />
        <Route path="/innovations" element={<Innovations />} />
        <Route path="/education" element={<Education />} />
        <Route path="/health" element={<Health />} />
        <Route path="/livelyhoods" element={<LivelyHoods />} />
        <Route path="/urbangovernance" element={<UrbanGovernance />} />
        <Route path="/education" element={<Education/>} />
        <Route path="/health" element={<Health/>} />
        {/* <Route path = "/livelyhood"element={<LivelyHood/>}/> */}
        {/* <Route path = "/urbangovernance"element={<UrbanGovernance/>}/> */}
        <Route path = "/GetInvolved"element={<GetInvolved/>}/>
        <Route path = "/Awards"element={<Awards/>}/>
        
        
      </Routes>
    </Router>
  );
}

export default App;
