import React from 'react';
import './App.css';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Board from './components/board';
import Tasks from './components/tasks';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';



function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/board">Board</NavLink></li>
            <li><NavLink to="/tasks">Tasks</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li> {/* nowy link */}
            <li><NavLink to="/login">Login</NavLink></li> {/* nowy link */}
          </ul>
        </nav> 
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/board" element={<Board />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/register" element={<Register />} /> {/* nowa ścieżka */}
            <Route path="/login" element={<Login />} /> {/* nowa ścieżka */}
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;