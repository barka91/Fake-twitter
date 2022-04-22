import React, { useState } from 'react';
import axios from 'axios'
import Signin from './Signin';
import Logout from "./Logout"
import Login from "./Login"
import Main from './Main'
import "./styles/MainPage.css"
// import ProfilPage from './ProfilPage';

function MainPage() {
        const [page, setPage] = useState('');
        const [isConnected, setConnected] = useState(false);
        const api=axios.create({
            withCredentials: 'true',
            baseURL: 'http://localhost:4000'
        });

    function getConnected(){
        
        var log = document.getElementById("log").value;
        var psw = document.getElementById("psw").value;
        api.post("/api/user/login",
            {
                login:log,
                password:psw,
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

    function theophaneacinqmaster() {
        setPage("mur de tweets");
        setConnected(true);
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
        content = <Signin/>
    }
    else {
        content = <Login method={getConnected}/>
    }
    
    if (!isConnected) {
        return (
            <div>
                <div className='wrapper'>
                    <div className='control'>
                        <div>
                            <input type="radio" id="inscription" name="drone" value="inscription"  onClick = {setSignin} />
                            <label for="inscription">Inscription</label>
                        </div>
                        <div>
                            <input type="radio" id="connexion" name="drone" value="connexion" onClick = {setLogout}/>
                            <label for="connexion">connexion</label>
                        </div>
                    </div>
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