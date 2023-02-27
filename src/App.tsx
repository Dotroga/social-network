import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Content/Profile/Profile";
import s from'./App.module.css';
import {Route, Routes} from "react-router-dom";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import UsersList from "./components/Content/Users/UsersList";


type AppPropsType = {
  store: any
}

const App: React.FC<AppPropsType> = ({store}) => {

  const state = store.getState()

    return (
      <div className={s.app}>
        <Navbar/>
        <div className={s.content}>
          <Routes>
            <Route path='/profile' element={
              <Profile
                profilePage={state.profileReducer && state.profileReducer}
                dispatch={store.dispatch.bind(store)}/>
            }/>
            <Route path='/messages' element={
              <Dialogs
                dialogs={state.dialogsReducer && state.dialogsReducer}
              />
            }/>
            {/*<Route path='/news' element={<News />}/>*/}
            <Route path='/users' element={<UsersList/>}/>
            {/*<Route path='/Settings' element={<Settings />}/>*/}
          </Routes>
        </div>
      </div>
  );
}

export default App;
