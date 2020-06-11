import React, { useEffect } from 'react';
import Contact from '../Home/Contact';
import { translateHead } from '../../utils/translateHead';
import {useLittera} from 'react-littera';



const ContactPage = () => {
    const [,language] = useLittera({});
    useEffect (()=> {
        translateHead(language, "contact")

    },[language])
    return <Contact />

}

export default ContactPage;

