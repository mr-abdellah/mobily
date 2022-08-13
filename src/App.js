import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Homepage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
