import React, { Component, useState } from 'react';
import axios from 'axios'
import NavigationPannel from './NavigationPannel';
import Signin from './Signin';
import Main from './Main'
import "./styles/MainPage.css"
import ProfilPage from './ProfilPage';



const MainPage = () => {
        const [page, setPage] = useState('')
        const [isConnected, setConnected] = useState(false)
        const api=axios.create({
            withCredentials: true,
            baseURL: 'http://localhost:4000'
        });

    function getConnected(){
        return new Promise (resolve => {
            api.post('api/user/login',{
            login: "login",
            password: "password"
            })
            .then((response) => {
                setPage('mur de tweets');
                setConnected(true);  
                resolve();
            });
        })
        
    }

    function setLogout() {
        setConnected(false)
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
    if(page == 'inscription') {
        content = <Signin/>
    }
    else {
        content = < NavigationPannel login={getConnected} logout={setLogout} isConnected={isConnected}></NavigationPannel>
    }
    if (isConnected == false) {
        
            return (
                <div>
                    <div className='wrapper'>
                        <div className='control'>
                            <button type = "submit" onClick = {setSignin}> 
                                inscription 
                            </button>
                            <button type = "submit" onClick = {setLogout}> 
                                connexion 
                            </button>
                        </div>
                        {content}
                    </div>           
                </div>
            )
        }
        else {
            return(
                <div>
                {content}
                <Main page={page}/>
            </div>
            )
            
        }  
        
    
}

    
export default MainPage;