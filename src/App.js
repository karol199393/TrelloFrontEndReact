import React from 'react';
import './App.css';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Board from './components/board';
import Tasks from './components/tasks';
import Home from './components/home';
import { Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div>
    <nav>
      <ul>
        <li><NavLink to ="/">Home</NavLink></li>
        <li><NavLink to ="/board">Board</NavLink></li>
        <li><NavLink to ="/tasks">Tasks</NavLink></li>
      </ul>
      </nav> 
      <section>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/board"  element={<Board/>} />
        <Route path="/tasks" element={<Tasks/>} />
        </Routes>
      </section>
    </div>
    </BrowserRouter>
    
  );
}

export default App;