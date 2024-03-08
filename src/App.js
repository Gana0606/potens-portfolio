import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './components/home/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
