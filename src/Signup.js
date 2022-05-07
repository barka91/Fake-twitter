import React from 'react';
import MainPage from "./MainPage"
import "./styles/Signup.css"
import signup_img from "./media/happy_chatting.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useForm } from './useForm';

function Signup({method,toLogin}) {

//     const { handleSubmit, handleChange, data: user, errors } = useForm({
//         validations: {
//           name: {
//             pattern: {
//               value: '^[A-Za-z]*$',
//               message:
//                 "You're not allowed to use special characters or numbers in your name.",
//             },
//           },
//           age: {
//             custom: {
//               isValid: (value) => parseInt(value, 10) > 17,
//               message: 'You have to be at least 18 years old.',
//             },
//           },
//           password: {
//             custom: {
//               isValid: (value) => value.length > 6,
//               message: 'The password needs to be at least 6 characters long.',
//             },
//           },
//         },
//         onSubmit: () => alert('User submitted!'),
//       });



// //     const form = document.getElementById('register-form');

// // const username = document.getElementById("name");
// //         const login = document.getElementById("login");
// //         const pass = document.getElementById("pass");
// //         const re_pass = document.getElementById("re_pass");
// //         console.log(login);
// //         form.addEventListener('click', e => {
// // 	e.preventDefault();
	
// // 	checkInputs();
// // });

// // function checkInputs() {
// // 	// trim to remove the whitespaces
	

// //         const nameValue = username.value.trim();
// //         const loginValue = login.value.trim();
// //         const passValue = pass.value.trim();
// //         const re_passValue = re_pass.value.trim();
        
// //         if(nameValue === '') {
// //             setErrorFor(username, 'Username cannot be blank');
// //         } else {
// //             setSuccessFor(username);
// //         }
        
// //         if(loginValue === '') {
// //             setErrorFor(login, 'Login cannot be blank');
// //         } else {
// //             setSuccessFor(login);
// //         }
        
// //         if(passValue === '') {
// //             setErrorFor(pass, 'Password cannot be blank');
// //         } else {
// //             setSuccessFor(pass);
// //         }
        
// //         if(re_passValue === '') {
// //             setErrorFor(re_pass, 'Password2 cannot be blank');
// //         } else if(re_passValue !== re_passValue) {
// //             setErrorFor(re_pass, 'Passwords does not match');
// //         } else{
// //             setSuccessFor(re_pass);
// //         }
// // }

// // function setErrorFor(input, message) {
// // 	const formControl = input.parentElement;
// // 	const small = formControl.querySelector('small');
// // 	formControl.className = 'form-control error';
// // 	small.innerText = message;
// // }

// // function setSuccessFor(input) {
// // 	const formControl = input.parentElement;
// // 	formControl.className = 'form-control success';
// // }
	

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

// render() {
//     return (
//         <div className="form-signup">
//             <div className="form-inner">
//                 <form className='signup' method="post">
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