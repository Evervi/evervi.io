import React from 'react';
import Offer from './Offer';
import Header from './Header';
import About from './About';

function Home() {

    return (
        <div style={{maxWidth: "100%"}}>
            <Header />
            <Offer />
            <About />
        </div>
    );
}

export default Home;
