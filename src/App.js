import React from 'react';
import './css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  
  return (
    <Router>
    <div >
      <Header>
          
      </Header>
      
        <div>
          <Routes>
          <Route
              path="cburton-portfolio/"
              element={<About />}
            />
            <Route
              path="/"
              element={<About />}
            />

            <Route
              path="/resume"
              element={<Resume />}
            />

            <Route
              path="/contact"
              element={<ContactForm />}
            />
            <Route
              path="/portfolio"
              element={<Portfolio />}
            />

          </Routes>
        </div>
      
      <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
