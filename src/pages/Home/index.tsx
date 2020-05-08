import React from 'react';
import Offer from './Offer';
import Header from './Header';
import About from './About';
import SocialMedia from "./SocialMedia";
import Portfolio from "./Portfolio";

function Home() {

    return (
        <div style={{maxWidth: "100%"}}>
            <Header />
            <Offer />
            <About />
            <SocialMedia />
            <Portfolio />
        </div>
    );
}

export default Home;
