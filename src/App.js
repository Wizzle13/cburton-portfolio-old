import React, { useState } from 'react';
import './css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
// import Portfolio from './components/Portfolio';



function App() {
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div >
      <Header>
          contactSelected={contactSelected}
            setContactSelected={setContactSelected}
      </Header>
      <main>
        <div>
        {!contactSelected ? (
          <>
            <About></About>
            {/* <Portfolio></Portfolio> */}
            <Resume></Resume>
                      </>
        ) : (
                    
            
            <ContactForm></ContactForm>
          )}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
