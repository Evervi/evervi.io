import React from 'react';
import { ReactComponent as MyImage } from  '../../assets/undraw_connected_world_wuay.svg';

function Header() {
    return <div className="Header">
        <div className="Header__side Header__side--wide">
            <h1 style={{fontWeight: "bold", fontSize: "82px", marginTop: 0, marginBottom: "1rem", lineHeight: "62px"}}>Get<br/>Some<br/><span style={{color: "#009688"}}>Money</span></h1>
            <p>We'll take care of your online existence from scratch. We'll take care of every possible detail, making your brand recognizable and present at the highest level. Our offer consists of many treatments that allow you to achieve it - from website preparation to marketing campaigns!</p>
        </div>
        <div className="Header__side"><MyImage style={{ height: "auto", width: "100%" }} /></div>
    </div>
}

export default Header;