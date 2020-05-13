import React, { useState } from 'react';
import Home from './pages/Home/';
import Navbar from './components/common/Navbar';
import LitteraProvider from 'react-littera';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes';

function App() {
  const [locale, setLocale] = useState('en_US');

  return (
    <LitteraProvider language={locale} setLanguage={setLocale}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes />
        </div>
      </Router>
    </LitteraProvider>
  );
}

export default App;
