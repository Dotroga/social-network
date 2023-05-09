import React from 'react';
import s from'./App.module.css';
import {Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Content/Users/UsersContainer";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import {Login} from "./components/ Login/Login";
import DialogsContainer from "./components/Content/Dialogs/Messages/DialogsContainer";

class App extends React.Component {
  render() {
    return (
      <div className={s.app}>
        <NavbarContainer/>
        <div className={s.content}>
          <Routes>
            <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
            <Route path='/messages' element={<DialogsContainer/>}/>
            <Route path='/users' element={<UsersContainer/>}/>
            {/*<Route path='/Settings' element={<Settings />}/>*/}
            <Route path='/login' element={<Login/>}/>
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
