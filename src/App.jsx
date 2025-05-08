import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Profile from './pages/about/profile';
import Impact from './pages/Impact/impact';
import Innovations from './pages/innovations/innovations';
import Navbar from './components/navbar/navbar';
 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/innovations" element={<Innovations />} />
        <Route path="/impact" element={<Impact />} />
       
      </Routes>
    </Router>
  );
}

export default App;
