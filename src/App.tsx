import React from 'react';
import s from'./App.module.css';
import {Route, Routes} from "react-router-dom";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import UsersContainer from "./components/Content/Users/UsersContainer";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Login from "./components/ Login/Login";



type AppPropsType = {
  store: any
}

const App: React.FC<AppPropsType> = ({store}) => {

  const state = store.getState()

    return (
      <div className={s.app}>
          <NavbarContainer/>
          <div className={s.content}>
            <Routes>
              <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
              <Route path='/messages' element={<Dialogs
                dialogs={state.dialogsReducer && state.dialogsReducer}
              />
              }/>
              {/*<Route path='/news' element={<News />}/>*/}
              <Route path='/users' element={<UsersContainer/>}/>
              {/*<Route path='/Settings' element={<Settings />}/>*/}
              <Route path='/login' element={<Login/>}/>
            </Routes>
        </div>
      </div>
  );
}

export default App;
