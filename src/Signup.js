import React from 'react';
import MainPage from "./MainPage"
import "./styles/Signup.css"
import signup_img from "./media/happy_chatting.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useForm } from './useForm';

function Signup({method,toLogin}) {

    return (
        <div class="container">
            <div class="signup-content">
                <div class="signup-form">
                    <h2 class="form-title">Créer votre compte</h2>
                    <form method="POST" class="register-form" id="form">
                        <div class="form-group">
                            <input type="text" name="name" id="name" placeholder="Nom et prenom"/>
                            <i class="valid"><FontAwesomeIcon icon={faCheckCircle} /></i>
                            <i class="invalid"><FontAwesomeIcon icon={faCircleExclamation} /></i>
                            <small class='error'>Error</small>
                        </div>
                        <div class="form-group">
                            <input type="login" name="login" id="login" placeholder="Nom d'utilisateur"/>
                            <i class="valid"><FontAwesomeIcon icon={faCheckCircle} /></i>
                            <i class="invalid"><FontAwesomeIcon icon={faCircleExclamation} /></i>
                            <small>Error</small>

                        </div>
                        <div class="form-group">
                            <input type="password" name="pass" id="pass" placeholder="Mot de passe" autocomplete="new-password"/>
                            <i class="valid"><FontAwesomeIcon icon={faCheckCircle} /></i>
                            <i class="invalid"><FontAwesomeIcon icon={faCircleExclamation} /></i>
                            <small>Error</small>
                        </div>
                        <div class="form-group">
                            <input type="password" name="re_pass" id="re_pass" placeholder="Confirmer le mot de passe"/>
                            <i class="valid"><FontAwesomeIcon icon={faCheckCircle} /></i>
                            <i class="invalid"><FontAwesomeIcon icon={faCircleExclamation} /></i>
                            <small>Error</small>
                        </div>
                        <div class="form-group form-button">
                            <input type="button" name="signup" id="signup" class="form-submit" value="Enregistrer" onClick = {method}/>
                        </div>
                    </form>
                </div>
                <div class="signup-image">
                    <figure><img src={signup_img} alt="sign up image"/></figure>
                    <a href="#" class="signup-image-link" onClick={toLogin}>J'ai deja un compte</a>
                </div>
            </div>
        </div>
    )
    

    
    
}
export default Signup;
