import React from 'react';
import './css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import ContactForm from './components/Contact';

function App() {
  return (
    <div >
      <Header></Header>
      <main>
        <div>
          <About></About>
          <ContactForm></ContactForm>
          <Resume> </Resume>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
