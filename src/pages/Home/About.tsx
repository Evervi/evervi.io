import React from 'react';
import { useLittera } from 'react-littera';
import translations from '../../translations/pages';

function About() {
    const translated = useLittera(translations);


    return <>
        <div className="About">
            <div className="About__Card">
                <h3>{translated.about}</h3>
                <p>{translated.about1}</p>
                <p>{translated.about2}</p>
                <p>{translated.about3}</p>
            </div>

            <div className="About__Image">
                <img src="https://source.unsplash.com/aWf7mjwwJJo" alt="AboutUs" />
            </div>

            <div className="About__Shadow">
            </div>
        </div>
    </>
}

export default About;