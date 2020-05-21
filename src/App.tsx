import React, { useState } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import LitteraProvider from 'react-littera';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes';
import Drawer, { DrawerContext } from './components/common/Drawer';

function App() {
  const [locale, setLocale] = useState("en_US");
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <LitteraProvider language={locale} setLanguage={setLocale}>
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

export default App;
