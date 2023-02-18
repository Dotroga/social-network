import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./Redux/reduxStore";


export const renderTree = () => {
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  );
}

