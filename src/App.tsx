import React from 'react';
import logo from './logo.svg';
import './App.css';
import AuthProvider from 'react-auth-kit';
import { store } from './lib/auth';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthProvider store={store}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </AuthProvider>
      </header>
    </div>
  );
}

export default App;
