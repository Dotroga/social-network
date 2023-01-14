import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Content/Profile/Profile";
import s from'./App.module.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/Content/Dialogs/Dialogs";

export type dialogsType = {
  id: number
  name: string
}

export type messagesType = {
  id: number
  message: string
}


function App() {
  const dialogs: dialogsType[] =  [
    { id: 0, name: 'Vasili' },
    { id: 1, name: 'Evgeniy' },
    { id: 2, name: 'Igor' },
    { id: 3, name: 'Boss' },
    { id: 4, name: 'Dasha' },
    { id: 5, name: 'Roma' },
    { id: 6, name: 'Timur' },
    { id: 7, name: 'Andreu' }
  ]

  const messages: messagesType[] = [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'Where are you from' },
    { id: 3, message: 'How are you?' },
    { id: 4, message: 'I started studying mobile development !' },
    { id: 5, message: "Cool, and I'm currently studying react, doing a big project" }
  ]

    return (
    <BrowserRouter>
      <div className={s.app}>
        <Navbar/>
        <div className={s.content}>
          <Routes>
            <Route path='/profile' element={
              <Profile />
            }/>
            <Route path='/messages' element={
              <Dialogs
                messages={messages}
                dialogs={dialogs}
              />
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
