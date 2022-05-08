import React, { useState } from 'react';
import SideBar from "./SideBar.js";
import ProfilPage from "./ProfilPage.js";
import "./styles/Main.css";
import HomePage from './HomePage.js';
import Chat from './chat.js';
import axios from 'axios'

function Main({pageactu,logout}) {
        const [page,setPage] = useState(pageactu);
        const [useridfr,setUseridFr] = useState("")
        const api=axios.create({
            withCredentials: 'true',
            baseURL: 'http://localhost:4000'
        });
        
    function setHome(){
        setPage("mur de tweets");
        setUseridFr("")
    }

    function setProfil(){
        setPage("page de profil");
    }
    
    function setProfilFriend(userid){
        console.log(userid+" :koko");
        setUseridFr(userid);
        setPage("page de profil ami");
    }

    function setChat(){
        setPage("message");
    }

    let content;
    if (page === "page de profil") {
        content = <ProfilPage setProfilFriend={setProfilFriend} userid={""}/>;   
    }else if (page === "page de profil ami") {
        content = <ProfilPage setProfilFriend={setProfilFriend} userid={useridfr}/> ;
    } else if (page === "message") {
        content = <Chat/> ;
    } else {
        content = <HomePage setProfilFriend={setProfilFriend}  /> ;
    }
    return (
        <div className='main'>
            <SideBar pprofil={setProfil} paccueil={setHome} pmessage={setChat} logout={logout}/>
            <div className='content'>
                {content}
            </div>
        </div>    

    );

}

export default Main;
