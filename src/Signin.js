import React, { Component } from 'react';
import MainPage from "./MainPage"

class Signin extends React.Component {
    constructor(props) {
        super(props);
        
    }

    
    render() {
        return (
            
            <form action="/ma-page-de-traitement" method="post" >
                <div>
                    <p>Select your gender:</p>
                    <input type="radio" id="male" name="gender" value="male"/> 
                    <label for="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female"/>
                    <label for="female">Female</label>
                </div>
                <div>
                    <label for="lastname">Nom :</label>
                    <input type="text" id="lastname" />
                </div>
                <div>
                    <label for="firstname">prenom :</label>
                    <input type="text" id="firstname"/>
                </div>
                <div>
                    <label for="mail">e-mail :</label>
                    <input type="email" id="mail"/>
                </div>
                <div>
                    <label for="username">nom d'utilisateur:</label>
                    <input type="text" id="username" autocomplete="off" />
                </div>
                <div>
                    <label for="password">mot de passe :</label>
                    <input type="password" id="password" autocomplete="new-password"/>
                </div>
                <button  > 
                    Valider 
                </button>
            </form>
    

            
        )

    }
}
export default Signin;