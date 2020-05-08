import React from 'react';
import { useLittera } from 'react-littera';
import translations from '../../translations/pages';
import Button from '../../components/shared/Button';

function About() {
    const [translated, , setLanguage] = useLittera(translations);

    return <>
        <div className="About">
            <div className="About__Card">
                <h3>{translated.about}</h3>
                <p>{translated.aboutDesc01}</p>
                <p>Donec pretium lorem metus, ac accumsan lorem auctor sit amet. Praesent sapien tortor, fermentum nec magna sit amet, tincidunt maximus libero.</p>
                <p>Maecenas ullamcorper pretium sapien ac venenatis. Suspendisse mattis dapibus gravida.</p>
                <p>Praesent sapien tortor, fermentum nec magna sit amet, tincidunt maximus libero.</p>

                <Button brandColor="primary" onClick={() => setLanguage("pl_PL")}>polski</Button>
                <Button brandColor="secondary" onClick={() => setLanguage("en_US")}>english</Button>

                <a href="https://google.com">Continue reading ></a>
            </div>

            <div className="About__Image">
                <img src="https://source.unsplash.com/aWf7mjwwJJo" />
            </div>

            <div className="About__Shadow">
            </div>
        </div>
    </>
}

export default About;