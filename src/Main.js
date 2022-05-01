import React, { Component } from 'react';
import SideBar from "./SideBar.js";
import ProfilPage from "./ProfilPage.js";
import "./styles/Main.css"
import HomePage from './HomePage.js';
import Chat from './chat.js'
import axios from 'axios'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page : props.page,
            logout : props.logout, 
        };
        this.setHome = this.setHome.bind(this);
        this.setProfil = this.setProfil.bind(this);
        this.setChat = this.setChat.bind(this);
        const api=axios.create({
            withCredentials: 'true',
            baseURL: 'http://localhost:4000'
        });
    }

    setHome(){
        this.setState((state) => {
            state.page = "mur de tweets";
            return state;
        }); 
    }

    setProfil(){
        this.setState((state) => {
            state.page = "page de profil";
            return state;
        }); 
    }

    setChat(){
        this.setState((state) => {
            state.page = "message";
            return state;
        }); 
    }

    render() {
        let content;
        if (this.state.page === "page de profil") {
            content = <ProfilPage/>;
         
        } else if (this.state.page === "message") {
            content = <Chat/> ;
        } else {
            content = <HomePage/> ;
        }
        return (
            <div className='main'>
                <SideBar pprofil={this.setProfil} paccueil={this.setHome} pmessage={this.setChat} logout={this.state.logout}/>
                <div className='content'>
                    {content}
                </div>
            </div>
            
    
        );
    }
}

export default Main;
