import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import Test1 from './components/Test1';
import Ref from './components/Ref';
import Hook from './components/Hook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          App
        </p>
        {/* <Timer />
        <Test1 />
        <Ref /> */}
        <Hook />
      </header>
    </div>
  );
}

export default App;
