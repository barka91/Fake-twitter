import React, { Component } from 'react';
import MainPage from "./MainPage"
import "./styles/Login.css"
import signup_img from "./media/happy_chatting.png"

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            method : props.method,
            toSignup : props.toSignup
        };
    }

    render() {
        return (
            <div class="container">
                <head>
                    <script defer src="MainPage.js"></script>
                </head>
                <div class="signup-content">
                    <div class="signup-image">
                        <figure><img src={signup_img} alt="sign in image"/></figure>
                        <a href="#" class="signup-image-link" onClick={this.state.toSignup}>Créer un compte</a>
                    </div>
                    <div class="signup-form">
                        <h2 class="form-title">Connectez-vous</h2>
                        <form method="GET" class="register-form" id="login-form" action='/'>
                            <div class="form-group">
                                <input type="text" name="login" id="login" placeholder="Nom d'utilisateur" required/>
                            </div>
                            <div class="form-group">
                                <input type="password" name="pass" id="pass" placeholder="Mot de passe" required/>
                            </div>
                            <div id="errorLog"></div>
                            <div class="form-group form-button">
                                <input type="button" name="signup" id="signup" class="form-submit" value="Suivant" onClick = {this.state.method}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
                
        )

    }
}
export default Login;


// <div className="form-login">
//                 <div className="title">
//                     Connectez-vous
//                 </div>
//                 <div className="form-inner">
//                     <form className="login">
//                         <div className="field">
//                             <input type = "text" placeholder="Nom d'utilisateur" id="log"></input>
//                         </div>
//                         <div className="field">
//                             <input type = "password" placeholder="Mot de passe" id='psw'></input>
//                         </div>
//                         <div className="field btn">
//                             <input type = "button" value="Connexion" onClick = {this.state.method}/> 
//                         </div>  
//                     </form>
//                 </div>
//             </div>