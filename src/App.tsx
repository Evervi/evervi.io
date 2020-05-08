import React, { useState } from 'react';
import Home from './pages/Home/';
import Navbar from './components/common/Navbar';
import LitteraProvider from 'react-littera';

function App() {
  const [locale, setLocale] = useState('en_US');

  return (
    <LitteraProvider language={locale} setLanguage={setLocale}>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </LitteraProvider>
  );
}

export default App;
