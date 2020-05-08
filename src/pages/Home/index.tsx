import React, { useState } from 'react';
import Offer from './Offer';
import Header from './Header';
import About from './About';

import Button from '../../components/shared/Button';

function Home() {

    function handleClick() {
        
    }

    return (
        <div style={{maxWidth: "100%"}}>
            <Header />
            <Offer />
            <About />
        </div>
    );
}

export default Home;
