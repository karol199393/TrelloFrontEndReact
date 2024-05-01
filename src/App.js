import React from 'react';
import './App.css';
import VerticalMenu from './components/VerticalMenu';
import BasicMenu from './components/BasicMenu';




function App() {
  return (
    <div className="App">
      <div className='TopNav'>
      < div className="leftMenu">
        <VerticalMenu />
      </div>
      <div className="content">
        <h1>Content</h1>
      </div>
      <div className="rightMenu">
        <BasicMenu />
      </div>
    </div>
    <div className='extraContent'>
      <h1>Top Content</h1>
      </div>
    </div>
 
  );
}

export default App;
