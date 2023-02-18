import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Content/Profile/Profile";
import s from'./App.module.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/Content/Dialogs/Dialogs";




type AppPropsType = {
  store: any
}

const App: React.FC<AppPropsType> = ({store}) => {

  const state = store.getState()

    return (
    <BrowserRouter>
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
                dispatch={store.dispatch.bind(store)}/>
            }/>
            {/*<Route path='/news' element={<News />}/>*/}
            {/*<Route path='/users' element={<UsersListContainer/>}/>*/}
            {/*<Route path='/Settings' element={<Settings />}/>*/}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
