import React from "react";
import Dropdown from 'react-dropdown';
import { useLittera } from "react-littera";

/** Do przeniesienia (polecam App.tsx), jeśli będzie gdzieś w projekcie kolejna implementacja react-dropdown. Nie chcemy drugi raz tego importować żeby klasy CSS się nie gryzły. */
import 'react-dropdown/style.css';

import { LANGUAGES, LANGUAGES_MAP, TLanguage } from "../../translations/utils";

const mapOptions = (lang: TLanguage) => {
    const value = lang;
    const label = LANGUAGES_MAP[lang];

    return { value, label };
}

const OPTIONS = Object.freeze( LANGUAGES.map(mapOptions) ) as any[]; // [ { value: "pl_PL", label: "Polski" }, { ... } ]

const LanguageSwitch = () => {
    const [, language, setLanguage] = useLittera({}) as [never, string, (language: string) => void];

    const handleChange = (event: { label: string, value: string }) => {
       setLanguage(event.value);
       document.documentElement.scrollTop = 0;
    }

    
    // TODO: Dostosować arrow
    return <Dropdown 
                className="LanguageSwitch__Dropdown" 
                menuClassName="LanguageSwitch__Dropdown__Menu" 
                controlClassName="LanguageSwitch__Dropdown__Control" 

                value={language} 
                onChange={handleChange as any} 
                options={OPTIONS} 

                placeholder="Select an language" />
}


export default LanguageSwitch;