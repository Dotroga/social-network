import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import s from'./App.module.css';

function App() {
  return (
    <div className={s.app}>
      <Header/>
      <Navbar/>
      <Profile/>
    </div>
  );
}

export default App;
