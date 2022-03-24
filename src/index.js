import React, { Profiler } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MainPage from "./MainPage"
import * as serviceWorker from './serviceWorker';
import NavigationPannel from "./NavigationPannel"
import Logout from "./Logout"
import Login from "./Login"
import TweetBox from "./TweetBox"
import ProfilPage from './ProfilPage';
import SideBar from './SideBar'

// ReactDOM.render(<SideBar />, document.getElementById('root'));
ReactDOM.render(<ProfilPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
