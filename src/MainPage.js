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
        api.post("/api/user/login",
            {
                login:login,
                password:pass,
            }
        ).then(response => {
            setPage("mur de tweets");
            setConnected(true);
        }
            
        ).catch(error => {
            console.log(error.response)
        });  
        
        
            
    }

    function name() {
        api.get("/api/user/"
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
        api.post("/api/user/signup",
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

    function setHome(){
        setPage('mur de tweets')
    }

    function setProfil(){
        setPage('profil')
    }

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
                <Main page={page} logout={setLogout}/>
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