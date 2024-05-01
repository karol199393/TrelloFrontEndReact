import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Board from './components/board';
import Login from './components/Login';

const RoutesComponent = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board" element={<Board />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
