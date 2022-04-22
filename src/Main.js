import React, { Component } from 'react';
import SideBar from "./SideBar.js";
import ProfilPage from "./ProfilPage.js";
import "./styles/Main.css"
import HomePage from './HomePage.js';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page : props.page,
            logout : props.logout, 
        };
        this.setHome = this.setHome.bind(this);
        this.setProfil = this.setProfil.bind(this);
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

    render() {
        let content;
        if (this.state.page === "page de profil") {
            content = <ProfilPage/>;
        } else if (this.state.page === "mur de tweets") {
            content = <HomePage/> ;
        }

        return (
            <div className='main'>
                <div className='side'>
                    <SideBar pprofil={this.setProfil} paccueil={this.setHome} logout={this.state.logout}/>
                </div>
                
                <div className='content'>
                    {content}
                </div>
                
            </div>
            
    
        );
    }
}

export default Main;
