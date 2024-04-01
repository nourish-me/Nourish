import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/About';
import About from './Components/About';
import BookAppointment from './Components/BookAppointment';
import Reviews from './Components/Reviews';
import Doctors from './Components/Doctors';
import Navbar from './Components/Navbar';



function App() {
  return (
    <div>
      <Router>
        <Navbar /> {/* Navbar always rendered at the top level */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/doctors" element={<Doctors />} />
          {/* Additional routes can be added as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
