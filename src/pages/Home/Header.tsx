import React from 'react';

function Header() {
    return <div className="Header">
        <div className="Header__side Header__side--wide">
            <h1 style={{ fontWeight: "bold", fontSize: "82px", marginTop: 0, marginBottom: "1rem", lineHeight: "70px" }}>
                <span style={{ opacity: 0.9 }}>wider</span>
                <br />
                <span style={{ color: "#009688" }}>VISION</span>
            </h1>
            <p>We'll take care of your online existence from scratch. We'll take care of every possible detail, making your brand recognizable and present at the highest level. Our offer consists of many treatments that allow you to achieve it - from website preparation to marketing campaigns!</p>
        </div>
        <div className="Header__side">
            <div className="Header__side__shape">
                <div className="Header__side__shadow"></div>
                <img src="https://source.unsplash.com/tbdAwwKYOMQ/700x700" />
            </div>
        </div>
    </div>
}

export default Header;