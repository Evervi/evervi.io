import React from 'react';
import { useLittera } from 'react-littera';
import translations from '../../translations/pages';

function Header() {
    const translated = useLittera(translations);

    return <div className="Header">
        <div className="Header__side Header__side--wide Header__side--text">
            <div className="Header__side__dotty Header__side__dotty--mobile"></div>
            <h1 style={{ fontWeight: "bold", fontSize: "82px", marginTop: 0, marginBottom: "1rem", lineHeight: "70px" }}>
                <span style={{ opacity: 0.9 }}>{translated.header1}</span>
                <br />
                <span style={{ color: "#009688" }}>{translated.header2}</span>
            </h1>
            <p>{translated.headerDesc}</p>
        </div>
        <div className="Header__side Header__side--fancy">
            <div className="Header__side__dotty"></div>
            <div className="Header__side__shape">
                <div className="Header__side__shadow"></div>
                <img src="https://i.imgur.com/NwSknIc.jpg"  alt="header"/>
            </div>
        </div>
    </div>
}

export default Header;