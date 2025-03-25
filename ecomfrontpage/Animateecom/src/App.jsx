import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Navbar2 from './components/Navbar/Navbar2.jsx';
import Hero from './components/Hero/Hero.jsx'; 
import Services from './components/Services/Services.jsx';
import Cards from './components/Cards/Cards.jsx'; 
import Categories from './components/Categories/Categories.jsx';
import Products from './components/Products/Products.jsx';
import Sales from './components/Grid/Sales.jsx';
import Offers from './components/Offers/Offers.jsx';
import Clients from './components/Clients/Clients.jsx';
import Blog from './components/Blog/Blog.jsx';
import QNA from './components/QNA/Qna.jsx'; 
import Subscribe from './components/Subscribe/Subscribe.jsx';
import Footer from './components/Footer/Footer.jsx';


function App() {
  

  return (
    <>
      <Navbar />
      <Navbar2 />
      <Hero />
      <Services />
      <Cards />
      <Categories />
       <Products /> 
       <Sales />
       <Offers />
       <Clients />
       <Blog />
       <QNA />
       <Subscribe />
       <Footer />
    </>
  )
}

export default App
