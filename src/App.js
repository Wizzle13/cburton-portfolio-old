import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';

function App() {
  return (
    <div >
      <Header></Header>
      <main>
        <div>
          <About></About>
          <Resume></Resume>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
