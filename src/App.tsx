import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Analytics from './components/Analytics';
import Newsleter from './components/Newsleter';
import Cards from './components/Cards';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
     <Navbar/>  
     <Hero/>
     <Analytics/>
     <Newsleter/>
     <Cards/>
     <Footer/>
    </div>
  );
}

export default App;
