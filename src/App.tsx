import React from 'react';
import Header from './components/header';
import Banner from './components/Banner';
import ListCard from './components/ListCard';
import Category from './components/Category';
import Footer from './components/Footer';
import Carrosel from './components/Carrosel';
import CreateNFT from './components/CreateNFT';
import Contact from './components/Contact';
import News from './components/News';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <ListCard />
   
     
      <CreateNFT />
      <Category />
      <Carrosel />
      <News />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
