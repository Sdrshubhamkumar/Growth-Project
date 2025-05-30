import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Profile from './pages/about/profile';
import Impact from './pages/Impact/impact';
import Navbar from './components/navbar/navbar';
import Education from './pages/Sectors/Education';
import Health from './pages/Sectors/Health';
import LivelyHood from './pages/Sectors/LivelyHoods';
import UrbanGovernance from './pages/Sectors/UrbanGovernance';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/education" element={<Education/>} />
        <Route path="/health" element={<Health/>} />
        <Route path = "/livelyhood"element={<LivelyHood/>}/>
        <Route path = "/urbangovernance"element={<UrbanGovernance/>}/>

      </Routes>
    </Router>
  );
}

export default App;
