import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import BuscarViaje from '../BuscarViaje/BuscarViaje';
import WaitList from '../WaitList/WaitList';
import Terminales from '../Terminales/Terminales';
import Mensaje from '../Mensaje/Mensaje';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/BuscarViaje" element={<BuscarViaje />} />
        <Route path="/WaitList" element={<WaitList />} />
        <Route path="/Terminales" element={<Terminales />} />
        <Route path="/Mensaje" element={<Mensaje />} />
      </Routes>
    </Router>
  );
}

export default App;
