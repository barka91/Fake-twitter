import React, { useState } from 'react';
import axios from 'axios'
import Signup from './Signup';
import Logout from "./Logout"
import Login from "./Login"
import Main from './Main'
import "./styles/MainPage2.css"
// import ProfilPage from './ProfilPage';

function MainPage() {
        const [page, setPage] = useState('inscription');
        const [isConnected, setConnected] = useState(false);
        const [userid,setUserid] = useState('');
        const api=axios.create({
            withCredentials: 'true',
            baseURL: 'http://localhost:4000'
        });

    function getConnected(){
        var login = document.getElementById("login").value;
        var pass = document.getElementById("pass").value;

        const form = document.getElementById("login-form");
        const error = document.getElementById('errorLog');
        let messages;

        form.addEventListener('submit',(e)=>{ // pour afficher les messages d'erreurs
            if(!messages){
                e.preventDefault();
                error.innerText = messages;
            }
        });

        api.post("/api/user/login",
            {
                login:login,
                password:pass,
            }
        ).then(response => {

            setPage("mur de tweets");
            setConnected(true);
        }
            
        ).catch(err => {

            console.log(err.response);
            messages = err.response.data.message;
            error.innerText = messages;
        });  
        
            
    }

    

    function sign(){
       
        var username = document.getElementById("name").value;
var login = document.getElementById("login").value;
var pass = document.getElementById("pass").value;
var re_pass = document.getElementById("re_pass").value;
        
        api.post("/api/user/signup",
            {
                name:username,
                login:login,
                password:pass,
                re_password:re_pass,
                ppid:1,
                banid:1
            }
        ).then(response => {
            setPage("connexion");
            console.log(response);
        }
            
        ).catch(error => {
            alert(error.response.data.message);
            console.log(error.response)
        });

    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        console.log(input);
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
    }
    
    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    function setLogout() {
        api.get("/api/logout")
        .then(response => {
            setConnected(false);
            setPage('connexion');
        }); 
    }
    
    function setLogin(){
        setConnected(false);
        setPage('connexion')
    }

    function setSignup() {
        setPage('inscription') 
    }

    const date = new Date;
    console.log(date.toISOString().slice(0, 10));
    

    let content;
    if(page === 'inscription') {
        content = <Signup method={sign} toLogin={setLogin}/>
    }
    else {
        content = <Login method={getConnected} toSignup={setSignup}/>
    }
    
    if (!isConnected) {
        return (
            <div>
                <div className='mainpage'>
                    {/* <div className='control'>
                        <div>
                            <input type="radio" id="inscription" name="drone" value="inscription"  onClick = {setSignup} />
                            <label for="inscription">Inscription</label>
                        </div>
                        <div>
                            <input type="radio" id="connexion" name="drone" value="connexion" onClick = {setLogout}/>
                            <label for="connexion">connexion</label>
                        </div>
                    </div> */}
                    {content}
                </div>
        
            </div>
        )
    }
    else {
        return(
            <div>
                <Main pageactu={page} logout={setLogout}/>
            </div>
        )
        
    }  
    
    
}

    
export default MainPage;

{/* <button type = "radio" onClick = {setSignup}> 
                                inscription 
                            </button>
                            <button type = "radio" onClick = {setLogout}> 
                                connexion 
                            </button> */}

                            // api.post("/api/user/signup",
        //     {
        //         name:name,
        //         login:login,
        //         password:pass,
        //         re_password:re_pass,
        //     }
        // ).then(response => {
        //     setPage("connexion");
        //     console.log(response);
        // }
            
        // ).catch(error => {
        //     alert(error.response.data.message);
        //     console.log(error.response)
        // });