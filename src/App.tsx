import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import s from'./App.module.css';
import {Route, Routes} from "react-router-dom";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import {UsersContainer} from "./components/Content/Users/UsersContainer";
import {HOKProfile} from "./components/Content/Profile/ProfileContainer";


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
            <Route path='/profile' element={<HOKProfile/>}/>
            <Route path='/messages' element={<Dialogs
                dialogs={state.dialogsReducer && state.dialogsReducer}
              />
            }/>
            {/*<Route path='/news' element={<News />}/>*/}
            <Route path='/users' element={<UsersContainer/>}/>
            {/*<Route path='/Settings' element={<Settings />}/>*/}
          </Routes>
        </div>
      </div>
  );
}

export default App;
