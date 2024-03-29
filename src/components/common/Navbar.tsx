import React from 'react';
import Button from '../shared/Button';
import { useHistory, useLocation } from 'react-router-dom';
import cx from "classnames";
import { useDrawer } from "./Drawer";
import Icon from '../shared/Icon';
import translations from '../../translations/pages';
import { useLittera } from 'react-littera';


function Navbar() {
  const [, setDrawer] = useDrawer();
  const history = useHistory();
  let location = useLocation();

  const handleNavigate = (path: string) => () => {
    history.push(path);
  }

  const handleDrawer = () => {
    setDrawer(true);
  }

  const translated = useLittera(translations);

  // Sprawdza czy w url jest aktualnie /projects.
  const isOnProjectsPage = Boolean(location?.pathname?.includes("/projects"));

  // Klasy dla <nav>
  const navbarClasses = 
          cx( "Navbar", { "Navbar--branded": isOnProjectsPage });

  return (
    <nav className={navbarClasses}>
      <div className="Navbar__Container">
          <h1 style={{userSelect: "none"}} onClick={handleNavigate("/")}>evervi</h1>

          <div className="Navbar__menu">
            <Button brandColor="secondary" onClick={handleNavigate("/")}>{translated.homeButton}</Button>
            <Button brandColor="secondary" onClick={handleNavigate("/projects")}>PORTFOLIO</Button>
            <Button brandColor="secondary" onClick={handleNavigate("/contact")}>{translated.contactButton}</Button>
          </div>
        <div className="Navbar__mobile-menu">
          <Button brandColor="secondary" onClick={handleDrawer}><Icon name="fas fa-bars" style={{ fontSize: "24px", margin: "6px", color: "black" }} /></Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;