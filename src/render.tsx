import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from "./Redux/reduxStore";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

export const renderTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>,
  document.getElementById('root'))
}

