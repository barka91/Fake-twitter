import React, { useEffect,useState } from 'react';
import axios from 'axios';
import MainPage from "./MainPage"
import avatar from "./media/1ceac0b83e8307449c91f21113b21762.jpg"
import banniere from "./media/Vogue_Merry_Anime_Infobox.png"
import image from "./media/sanji.png"
import './styles/ProfilBox.css'
import Editor from './Editor';

function ProfilBox({userid}) {
    const [name, setName] = useState();
    const [login,setLogin] = useState();
    const [shedit,setShedit] = useState(false);

    const api=axios.create({
        withCredentials: 'true',
        baseURL: 'http://localhost:4000'
    });

    useEffect(() => {
        console.log(userid)
        api.get("/api/user/"+(userid+""=="undefined"?"":userid)
        ).then(response => {
            const {name,login} = response.data;
            setName(name);
            setLogin(login);
            
        });
    });

    function hideEdit() {
        if (userid=="") {
            setShedit(!shedit);
        }
        
    }

        return (
            <div className='profilbox'>
                <div className='banniere'>
                    <img src={banniere}/>
                </div>
                <div className='avatar'>
                    <img src={avatar}></img>
                </div>
                <div className='edit'>
                    <button onClick={() => hideEdit()}>edit</button>
                    {shedit && <Editor />}
                </div>
                <div className='text'>
                    <div className='username'>
                        <span>{name} </span>
                    </div>
                    <div className='id'>
                        <span>@{login}</span>
                    </div>
                    <div className='description'>
                        <span>Le vrai capitaine</span>
                    </div>
                    <div className='info'>
                        <div className='lieu'>
                            <span>Sirop, East Blue</span>
                        </div>
                        <div className='date'>
                            <span>Naissance le 1 avril 2001</span>
                        </div>
                    </div>
                </div>
            </div>
             
        )


}
export default ProfilBox;