import React from 'react';
import Button from '../shared/Button';


function chuj() {
  console.log("Ci w dupę!");
}

function Navbar() {
  return (
    <nav className="Navbar">
        <h1>evervi</h1>

        <div className="Navbar__menu">
          <Button brandColor="secondary" onClick={chuj}>HOME</Button>
          <Button brandColor="primary" onClick={chuj}>OFFER</Button>
        </div>

        <div className="Navbar__mobile-menu">
          <Button brandColor="secondary" onClick={chuj}>---</Button>
        </div>
    </nav>
  );
}

export default Navbar;
