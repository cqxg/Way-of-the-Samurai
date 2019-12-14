import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Technologies />
    </div >
  );
}

const Technologies = () => {
  return (
    <div>
      <ul>
        <li>css</li>
        <li>html</li>
        <li>js</li>
        <li>react</li>
      </ul>
    </div>
  )
}

const Header = () => {
  return (
    <div>
      <a>Home</a>
      <a>Feedback</a>
      <a>Hello</a>
    </div>
  )
}

export default App;
