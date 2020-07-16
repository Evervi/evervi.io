import React, { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import { LitteraProvider } from 'react-littera';
import { HashRouter as Router } from "react-router-dom";
import Routes from './Routes';
import Drawer, { DrawerContext } from './components/common/Drawer';
import { translateHead } from './utils/translateHead';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [locale, setLocale] = useState(parseLocale(window.navigator.language) ?? "en_US");
  
  useEffect(()=> {
    translateHead(locale as "en_US" | "pl_PL")
  },[locale])

  return (
    <LitteraProvider locales={["en_US", "pl_PL"]}>
      <Router>
      <DrawerContext.Provider value={{ isOpen: drawerOpen, setOpen: setDrawerOpen }}>
          <div className="App">
            <Navbar />
            <Routes />
            <Drawer />
            <Footer />
          </div>
        </DrawerContext.Provider>
      </Router>
    </LitteraProvider>
  );
}

const parseLocale = (locale: string) => {
  if (!locale) return null;

  if (locale.includes("-")) return locale.replace("-", "_");

  return locale + "_" + locale.toUpperCase();
}

export default App;
