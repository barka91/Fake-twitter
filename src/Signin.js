import React, { Component } from 'react';
import MainPage from "./MainPage"
import "./styles/Signin2.css"
import signup_img from "./media/happy_chatting.png"

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            method : props.method,
            toLogin : props.toLogin
        };
        
    }

    render() {
        return (
            <div class="container">
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="form-title">Créer votre compte</h2>
                        <form method="POST" class="register-form" id="register-form">
                            <div class="form-group">
                                <input type="text" name="name" id="name" placeholder="Nom et prenom"/>
                            </div>
                            <div class="form-group">
                                <input type="login" name="login" id="login" placeholder="Nom d'utilisateur"/>
                            </div>
                            <div class="form-group">
                                <input type="password" name="pass" id="pass" placeholder="Mot de passe"/>
                            </div>
                            <div class="form-group">
                                <input type="password" name="re_pass" id="re_pass" placeholder="Confirmer le mot de passe"/>
                            </div>
                            <div class="form-group form-button">
                                <input type="button" name="signup" id="signup" class="form-submit" value="Enregistrer" onClick = {this.state.method}/>
                            </div>
                        </form>
                    </div>
                    <div class="signup-image">
                        <figure><img src={signup_img} alt="sign up image"/></figure>
                        <a href="#" class="signup-image-link" onClick={this.state.toLogin}>J'ai deja un compte</a>
                    </div>
                </div>
            </div>
        )
        
    }
    
    
}
export default Signin;

// render() {
//     return (
//         <div className="form-signin">
//             <div className="form-inner">
//                 <form className='signin' method="post">
//                     <div className='radio'>
//                         <div className="gender-title">
//                             <p>Selectionnez votre sexe:</p>
//                         </div>
//                         <div className="gender-selector">
//                             <div className="gender">
//                                 <input type="radio" id="male" name='gender' value="male"/> 
//                                 <label for="male">Homme</label>                                    
//                             </div>
//                             <div className="gender">
//                                 <input type="radio" id="female" name='gender' value="female"/>
//                                 <label for="female">Femme</label>
//                             </div>
                           
//                         </div>

//                     </div>
//                     <div className='field'>
//                         <input type="text" placeholder="Prénom" id='frsname'/>
//                     </div>
//                     <div className='field'>
//                         <input type="text" placeholder='Nom de famille' id='lstname' />
//                     </div>
//                     <div className='field'>
//                         <input type="text" placeholder="Nom d'utilisateur" autoComplete="off" id='log'/>
//                     </div>
//                     <div className='field'>
//                         <input type="password" placeholder='Mot de passe' autoComplete="new-password" id='psw'/>
//                     </div>
//                     <div className="field btn">
//                     <input type = "button" value="Inscription" onClick = {this.state.method}/> 
//                     </div>
//                 </form>
//             </div>
            
//         </div>
        


        
//     )

// }