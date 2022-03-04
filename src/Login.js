import React, { Component } from 'react';
import MainPage from "./MainPage"
import "./styles.css"

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            method : props.method
        };
    }

    render() {
        return (
            <div className="form-login">
                <div className="title">
                    Connectez-vous
                </div>
                <div className="form-inner">
                    <form className="login">
                        <div className="field">
                            <input type = "text" placeholder="Nom d'utilisateur"></input>
                        </div>
                        <div className="field">
                            <input type = "password" placeholder="Mot de passe"></input>
                        </div>
                        <div className="field btn">
                            <input type = "submit" value="Connexion" onClick = {this.state.method}/> 
                        </div>  
                    </form>
                </div>
            </div>
            
                
        )

    }
}
export default Login;