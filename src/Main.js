import React, { Component } from 'react';
import SideBar from "./SideBar.js";
import ProfilPage from "./ProfilPage.js";
import NavigationPannel from './NavigationPannel.js';
import "./styles/Main.css"
import HomePage from './HomePage.js';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page : props.page, 
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
        if (this.state.page == "page de profil") {
            content = <ProfilPage/>;
        } else if (this.state.page == "mur de tweets") {
            content = <HomePage/> ;
        }

        return (
            <div className='main'>
                <SideBar pprofil={this.setProfil} paccueil={this.setHome}/>
                <div className='content'>
                    {content}
                </div>
                
            </div>
            
    
        );
    }
}

export default Main;
