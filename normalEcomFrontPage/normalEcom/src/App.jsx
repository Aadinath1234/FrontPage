import React from 'react';
import Navbar from './component/Navbar/Navbar.jsx';
import Hero from './component/Hero/Hero.jsx'; 
import Cards from './component/Cards/Cards.jsx';
import Grid from './component/grid/Grid.jsx'; 
import Nav from './component/Navbar/Navbar1.jsx'; 

function App() {
  return (
    
    <div className='overflow-x-hidden'>
      <Nav />
      <Navbar />
      <Hero />
      <Cards />
      <Grid />
      
    </div>
  );
};

export default App;
