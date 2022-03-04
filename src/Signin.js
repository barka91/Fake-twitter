import React, { Component } from 'react';
import MainPage from "./MainPage"

class Signin extends React.Component {
    constructor(props) {
        super(props);
        
    }

    
    render() {
        return (
            <div>
                <form className='signin' method="post">
                    <div className='radio'>
                        <p>Select your gender:</p>
                        <input type="radio" id="male" name="gender" value="male"/> 
                        <label for="male">Male</label>
                        <input type="radio" id="female" name="gender" value="female"/>
                        <label for="female">Female</label>
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
                    <button  > 
                        Valider 
                    </button>
                </form>
            </div>
            
    

            
        )

    }
}
export default Signin;