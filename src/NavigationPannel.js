import React, { Component } from 'react';
import MainPage from "./MainPage"
import Logout from "./Logout"
import Login from "./Login"

class NavigationPannel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isConnected : props.isConnected, 
            login : props.login,
            logout : props.logout};
    }

    render() {
        let composant;
        
        if (this.props.isConnected) {
            return( < Logout method={this.state.logout}/> );
        } else {
            return( < Login method={this.state.login}/> );
        }
     
    }
}
export default NavigationPannel;