import React from 'react';
import Button from '../shared/Button';
import { useHistory } from 'react-router-dom';


function chuj() {
  console.log("Ci w dupę!");
}

function Navbar() {
  const history = useHistory();

  const handleNavigate = (path: string) => () => {
    history.push(path);
  }

  return (
    <nav className="Navbar">
        <h1 onClick={handleNavigate("/")}>evervi</h1>

        <div className="Navbar__menu">
          <Button brandColor="secondary" onClick={handleNavigate("/")}>HOME</Button>
          <Button brandColor="secondary" onClick={handleNavigate("/projects")}>PORTFOLIO</Button>
          <Button brandColor="secondary" onClick={chuj}>CONTACT</Button>
        </div>

        <div className="Navbar__mobile-menu">
          <Button brandColor="secondary" onClick={chuj}>---</Button>
        </div>
    </nav>
  );
}

export default Navbar;