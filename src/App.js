import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div >
      <Header></Header>
      <main>
        <div>
          <About></About>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
