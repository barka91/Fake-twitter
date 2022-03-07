import React, { Component } from 'react';
import MainPage from "./MainPage"

class Signin extends React.Component {
    constructor(props) {
        super(props);
        
    }

    
    render() {
        return (
            <div className="form-signin">
                <div className="form-inner">
                    <form className='signin' method="post">
                        <div className='radio'>
                            <div className="gender-title">
                                <p>Selectionnez votre sexe:</p>
                            </div>
                            <div className="gender-selector">
                                <div className="gender">

                                    <input type="radio" id="male"  value="male"/> 
                                    <label for="male">Homme</label>                                    
                                </div>
                                <div className="gender">
                                    <input type="radio" id="female" value="female"/>
                                    <label for="female">Femme</label>
                                </div>
                            </div>

                        </div>
                        <div className='field'>
                            <input type="text" placeholder="prénom"/>
                        </div>
                        <div className='field'>
                            <input type="text" placeholder='Nom de famille' />
                        </div>
                        <div className='field'>
                            <input type="email" placeholder='adresse email'/>
                        </div>
                        <div className='field'>
                            <input type="text" placeholder="Nom d'utilisateur" autocomplete="off" />
                        </div>
                        <div className='field'>
                            <input type="password" placeholder='Mot de passe' autocomplete="new-password"/>
                        </div>
                        <div className="field btn">
                            <input type = "submit" value="Inscription" /> 
                        </div>
                    </form>
                </div>
                
            </div>
            
    

            
        )

    }
}
export default Signin;