import React, { useEffect } from 'react';
import Offer from './Offer';
import Header from './Header';
import About from './About';
import SocialMedia from "./SocialMedia";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import {useLittera} from 'react-littera'
import { translateHead } from '../../utils/translateHead';

function Home() {
    const [,language] = useLittera({});
    useEffect (()=> {
        translateHead(language, "home")

    },[language])

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
