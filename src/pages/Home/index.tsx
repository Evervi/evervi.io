import React, { useEffect } from 'react';
import Offer from './Offer';
import Header from './Header';
import About from './About';
import SocialMedia from "./SocialMedia";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import {useLittera, useLitteraMethods} from 'react-littera'
import { translateHead } from '../../utils/translateHead';

function Home() {
    const { locale } = useLitteraMethods();
    useEffect (()=> {
        translateHead(locale as "pl_PL" | "en_US", "home")

    },[locale])

    return (
        <div style={{maxWidth: "100%"}}>
            <Header />
            <Offer />
            <About />
            <SocialMedia />
            <Portfolio />
            <Contact displayHr />
        </div>
    );
}

export default Home;
