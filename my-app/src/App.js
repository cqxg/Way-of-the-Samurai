import React, { Component } from 'react';

import { Header } from './header';
import { Technologies } from './technologies';

import './App.css';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Technologies />
    </div >
  );
}

export default App;
