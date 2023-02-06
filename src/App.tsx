import React, {ChangeEvent, useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Content/Profile/Profile";
import s from'./App.module.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/Content/Dialogs/Dialogs";
import {StateType} from "./Redux/state";
import {v1} from "uuid";


type AppPropsType = {
  state: StateType
}

const App: React.FC<AppPropsType> = (props) => {
  const [state, setState] = useState<StateType>(props.state)

  const addNewPost = () => {
      const newPost = {id: v1(), text: state.profilePage.textForInputPost}
    setState({...state,
      profilePage: {...state.profilePage,
        posts:[newPost, ...state.profilePage.posts], textForInputPost: ''}})
  }
  const textPostHandlerForProfile = (text: string) => {
    setState({...state, profilePage: {...state.profilePage, textForInputPost: text}})
  }
    return (
    <BrowserRouter>
      <div className={s.app}>
        <Navbar/>
        <div className={s.content}>
          <Routes>
            <Route path='/profile' element={
              <Profile
                profilePage={state.profilePage}
                textPostHandler={textPostHandlerForProfile}
                addNewPost={addNewPost}/>
            }/>
            <Route path='/messages' element={
              <Dialogs
                dialogs={state.dialogs}/>
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
