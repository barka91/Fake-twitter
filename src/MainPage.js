import React, { Component } from 'react';
import NavigationPannel from './NavigationPannel';
import Signin from './Signin';
import Main from './Main'
import "./styles/MainPage.css"
import ProfilPage from './ProfilPage';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page : props.page, 
            isConnected : false };
        this.getConnected = this.getConnected.bind(this);
        this.setLogout = this.setLogout.bind(this);
        this.setSignin = this.setSignin.bind(this);
        this.setHome = this.setHome.bind(this);
        this.setProfil = this.setProfil.bind(this);
    }

    getConnected(){

        this.setState((state) => {
            state.page = "mur de tweets";
            state.isConnected = true;
            return state;
        });  
    }

    setLogout() {

        this.setState((state) => {
            state.page = "connexion";
            state.isConnected = false;
            return state;
        });    
    }

    setSignin() {

        this.setState((state) => {
            state.page = "inscription";
            return state;
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
            state.page = "profil";
            return state;
        }); 
    }

    

    render() {
        let content;
        
        
        if (this.state.page == "inscription") {
            content = < Signin/>;
        } else {
            content = < NavigationPannel login={this.getConnected} logout={this.setLogout} isConnected= {this.state.isConnected} /> ;
        } 
        

        if (this.state.isConnected == false) {
            return (
                <div>
                    <div className='wrapper'>
                        <div className='control'>
                            <button type = "submit" onClick = {this.setSignin}> 
                                inscription 
                            </button>
                            <button type = "submit" onClick = {this.setLogout}> 
                                connexion 
                            </button>
                        </div>
                        {content}
                    </div>           
                </div>
            )
        }
        else {
            return(
                <div>
                {content}
                <Main page={this.state.page}/>
            </div>
            )
            
        }  
        
    }

}

    
export default MainPage;