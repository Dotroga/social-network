import React from 'react';
import {Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Content/Users/UsersContainer";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import {Login} from "./components/ Login/Login";
import DialogsContainer from "./components/Content/Dialogs/Messages/DialogsContainer";
import styled from "styled-components";
import {connect} from "react-redux";
import {AppStateType} from "./Redux/reduxStore";

type AppPropsType = {
  isInitialized: boolean
}

class App extends React.Component<AppPropsType> {
  render() {
    console.log(this.props.isInitialized)
    return (
      <WrapperApp>
        <NavbarContainer/>
        <div className='content'>
          {this.props.isInitialized &&
            <Routes>
              <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
              <Route path='/messages' element={<DialogsContainer/>}/>
              <Route path='/users' element={<UsersContainer/>}/>
              {/*<Route path='/Settings' element={<Settings />}/>*/}
              <Route path='/login' element={<Login/>}/>
            </Routes>
          }
        </div>
      </WrapperApp>
    );
  }
}
export default connect(
  (state: AppStateType)=>({isInitialized:state.authReducer.isInitialized}),
  {})(App)


const WrapperApp = styled.div`
    margin: 40px;
    display: grid;
    grid-template-areas:'nav c c c c';
    grid-template-columns: 2fr 10fr;
    background-color: #e8e8f3;
    min-width: 580px;
    max-width: 1400px;
    border-radius: 10px;
    box-shadow: 2px 2px 20px #c6c3e5;
  .content {
    padding: 20px;
    box-shadow: 2px 2px 20px #d0cde3;
    background: -webkit-linear-gradient(90deg, #f3f5fa,#f1effb);
    background: linear-gradient(90deg, #f3f5fa,#f1effb);
    border-radius: 10px;
    overflow: auto;
    z-index: 1;
  }
  .content::-webkit-scrollbar {
    width: 22px; /* ширина scrollbar */
  }
  .content::-webkit-scrollbar-thumb {
    border: 5px solid #efeef9;
    background-color: #7549bb;    /* цвет плашки */
    border-radius: 20px;       /* закругления плашки */
  }
`
