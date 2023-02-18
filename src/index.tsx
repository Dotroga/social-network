import React from 'react';
import './index.css';
import {renderTree} from "./render";
import {store} from './Redux/reduxStore'

store.subscribe(renderTree)
renderTree()






