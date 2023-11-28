import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Talentos from './pages/Talentos';
import Pymes from './pages/Pymes';
import Foros from './pages/Foros';
import Nosotros from './pages/Nosotros';
import Ingresar from './pages/Ingresar';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/talentos" element={<Talentos />} />
          <Route path="/pymes" element={<Pymes />} />
          <Route path="/foros" element={<Foros />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/ingresar" element={<Ingresar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
