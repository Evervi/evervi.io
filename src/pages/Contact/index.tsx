import React, { useEffect } from 'react';
import Contact from '../Home/Contact';
import { translateHead } from '../../utils/translateHead';
import {useLitteraMethods} from 'react-littera';



const ContactPage = () => {
    const {locale} = useLitteraMethods()
    useEffect (()=> {
        translateHead(locale as "pl_PL" | "en_US", "contact")

    },[locale])
    return <Contact />

}

export default ContactPage;

