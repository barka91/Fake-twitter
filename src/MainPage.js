import React, { Component } from 'react';
import NavigationPannel from './NavigationPannel';
import Signin from './Signin';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page : props.page, 
            isConnected : false };
        this.getConnected = this.getConnected.bind(this);
        this.setLogout = this.setLogout.bind(this);
        this.setSignin = this.setSignin.bind(this);
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
            alert("signin")
            return state;
        });    
    }

    

    render() {
        return (
            <div>
                MainPage
            
                

                {this.state.page == "inscription" ? (
                    < Signin /> 
                ) : ( 
                    <div>
                        < NavigationPannel login={this.getConnected} logout={this.setLogout} isConnected= {this.state.isConnected} /> 
                    <button type = "submit" onClick = {this.setSignin}> 
                        inscription 
                    </button>
                    </div>
                )}
                
                
            </div>
        )

    }

}

    
export default MainPage;