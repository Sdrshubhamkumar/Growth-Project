import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Profile from './pages/about/profile';
import Impact from './pages/Impact/impact';
import Navbar from './components/Navbar/Navbar'; // Use consistent capitalization

// About pages
import History from './pages/about/history';
import BoardOfTrustees from './pages/about/boardOfTrustees';
import Governance from './pages/about/governance';
import SaathInstitutionalPartners from './pages/about/saathInstitutionalPartners';
import FundersAndPartners from './pages/FundersAndPartners/funders&Partners';
 

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
        <Route path="/csr" element={<CSR />} />
        <Route path="/funders-and-partners" element={<FundersAndPartners />} />
        <Route path="/innovations" element={<Innovations />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/education" element={<Education />} />
        <Route path="/health" element={<Health />} />
        <Route path="/livelyhood" element={<LivelyHood />} />
        <Route path="/urbangovernance" element={<UrbanGovernance />} />
      </Routes>
    </Router>
  );
}

export default App;
