import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import BuscarViaje from '../BuscarViaje/BuscarViaje';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/BuscarViaje" element={<BuscarViaje />} />
      </Routes>
    </Router>
  );
}

export default App;
