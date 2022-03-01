import React, { Component } from 'react';
import MainPage from "./MainPage"

class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            method : props.method
        };
    }

    
    render() {
        return (
            <div>
                <button type = "submit" onClick = {this.state.method}> 
                    Déconnexion
                </button>
            </div>
            
        )

    }
}
export default Logout;