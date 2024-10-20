import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import BuscarViaje from '../BuscarViaje/BuscarViaje';
import WaitList from '../WaitList/WaitList';
import Terminales from '../Terminales/Terminales';
import Mensaje from '../Mensaje/Mensaje';
import InformacionViaje from '../InformacionViaje/InformacionViaje'
import HorariosPrecios from '../InformacionViaje/HorariosPrecios';

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
        <Route path="/InformacionViaje" element={<InformacionViaje />} />
        <Route path="/HorariosPrecios" element={<HorariosPrecios />} />
      </Routes>
    </Router>
  );
}

export default App;
