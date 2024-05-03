import React from 'react';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
    <nav>
      <ul>
        <li><Link to ="/">Home</Link></li>
        <li><Link to ="/board">Board</Link></li>
        <li><Link to ="/lists">Tasks</Link></li>
      </ul>
      </nav>  
    </div>
    </BrowserRouter>
    
      
   
  );
}

export default App;