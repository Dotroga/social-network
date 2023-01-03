import React from 'react';
import Technologies from "./components/Technologies";
import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <div className='header'>
        <Header/>
      </div>
      <div className='nav'>
        <div className='container'>
          Profile
        </div>
        <div className='container'>
          Messages
        </div>
        <div>
          News
        </div>
      </div>
      <div className='content'>
          Content
      </div>
    </div>
  );
}

export default App;
