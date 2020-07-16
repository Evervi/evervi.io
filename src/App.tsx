import React, { useState } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import { LitteraProvider } from 'react-littera';
import { HashRouter as Router } from "react-router-dom";
import Routes from './Routes';
import Drawer, { DrawerContext } from './components/common/Drawer';


function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  return (
    <LitteraProvider detectLocale locales={["en_US", "pl_PL"]}>
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
