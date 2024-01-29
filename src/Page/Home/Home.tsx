import React from 'react';
import Header from '../../components/header';
import Banner from '../../components/Banner';
import ListCard from '../../components/ListCard';
import CreateNFT from '../../components/CreateNFT';
import Category from '../../components/Category';
import Carrosel from '../../components/Carrosel';
import News from '../../components/News';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

const Home = () => {

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
export default Home;
