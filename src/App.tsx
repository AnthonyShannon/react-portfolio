import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Navbar, TitlePage } from './components'

function App() {
  return (
    <div className="App">
      <Navbar />
      <TitlePage />
    </div>
  );
}

export default App;
