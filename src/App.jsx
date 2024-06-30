import React from 'react';
import Clock from './components/Clock';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="container">
        <Clock />
      </main>
    </div>
  );
}

export default App;
