import React from 'react';
import Button from '../shared/Button';
import { useHistory, useLocation } from 'react-router-dom';
import cx from "classnames";

function chuj() {
  console.log("Ci w dupę!");
}

function Navbar() {
  const history = useHistory();
  let location = useLocation();

  const handleNavigate = (path: string) => () => {
    history.push(path);
  }

  // Sprawdza czy w url jest aktualnie /projects.
  const isOnProjectsPage = Boolean(location?.pathname?.includes("/projects"));

  // Klasy dla <nav>
  const navbarClasses = 
          cx( "Navbar", { "Navbar--branded": isOnProjectsPage });

  return (
    <nav className={navbarClasses}>
      <div className="Navbar__Container">
          <h1 onClick={handleNavigate("/")}>evervi</h1>

          <div className="Navbar__menu">
            <Button brandColor="secondary" onClick={handleNavigate("/")}>HOME</Button>
            <Button brandColor="secondary" onClick={handleNavigate("/projects")}>PORTFOLIO</Button>
            <Button brandColor="secondary" onClick={chuj}>CONTACT</Button>
          </div>
        <div className="Navbar__mobile-menu">
          <Button brandColor="secondary" onClick={chuj}>---</Button>
          <Button brandColor="secondary" onClick={chuj}>---</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;