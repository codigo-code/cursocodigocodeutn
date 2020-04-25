import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormEj from './components/FormEj';
import FormPersona from './components/FormPersona';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <br/>
      <FormEj nombre="lucas"></FormEj>
      <br/>
      <FormPersona></FormPersona>
    </div>
  );
}

export default App;
