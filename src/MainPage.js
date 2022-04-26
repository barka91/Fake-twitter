import React, { useState } from 'react';
import axios from 'axios'
import Signin from './Signin';
import Logout from "./Logout"
import Login from "./Login"
import Main from './Main'
import "./styles/MainPage2.css"
// import ProfilPage from './ProfilPage';

function MainPage() {
        const [page, setPage] = useState('inscription');
        const [isConnected, setConnected] = useState(false);
        const api=axios.create({
            withCredentials: 'true',
            baseURL: 'http://localhost:4000'
        });

    function getConnected(){
        
        var login = document.getElementById("login").value;
        var pass = document.getElementById("pass").value;
        api.post("/api/user/login",
            {
                login:login,
                password:pass,
            }
        ).then(response => {
            setPage("mur de tweets");
            setConnected(true);
            console.log(response);
        }
            
        ).catch(error => {
            console.log(error.response)
        });     
            
    }

    function sign(){
        var name = document.getElementById("name").value;
        var login = document.getElementById("login").value;
        var pass = document.getElementById("pass").value;
        var re_pass = document.getElementById("re_pass").value;
        api.post("/api/user/signin",
            {
                name:name,
                login:login,
                password:pass,
                re_password:re_pass,
            }
        ).then(response => {
            setPage("connexion");
            console.log(response);
        }
            
        ).catch(error => {
            console.log(error.response)
        });     
            
    }

    function setLogout() {
        setConnected(false);
        setPage('connexion')
    }
    

    function setSignin() {
        setPage('inscription') 
    }

    function setHome(){
        setPage('mur de tweets')
    }

    function setProfil(){
        setPage('profil')
    }

    let content;
    if(page === 'inscription') {
        content = <Signin method={sign} toLogin={setLogout}/>
    }
    else {
        content = <Login method={getConnected} toSignup={setSignin}/>
    }
    
    if (!isConnected) {
        return (
            <div>
                <div className='mainpage'>
                    {/* <div className='control'>
                        <div>
                            <input type="radio" id="inscription" name="drone" value="inscription"  onClick = {setSignin} />
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
                <Main page={page} logout={setLogout}/>
            </div>
        )
        
    }  
    
    
}

    
export default MainPage;

{/* <button type = "radio" onClick = {setSignin}> 
                                inscription 
                            </button>
                            <button type = "radio" onClick = {setLogout}> 
                                connexion 
                            </button> */}