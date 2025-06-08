import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Profile from './pages/about/profile';
import Impact from './pages/Impact/impact';
import Innovations from './pages/innovations/innovations';
import Navbar from './components/Navbar/Navbar';
import History from './pages/about/history';
import BoardOfTrustees from './pages/about/boardOfTrustees';
import Governance from './pages/about/governance';
import SaathInstitutionalPartners from './pages/about/saathInstitutionalPartners';
import FundersAndPartners from './pages/FundersAndPartners/fundersAndPartners';
 

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
        <Route path="/innovations" element={<Innovations />} />
        <Route path="/impact" element={<Impact />} />
       
      </Routes>
    </Router>
  );
}

export default App;
