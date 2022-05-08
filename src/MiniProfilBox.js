import React, { useEffect,useState } from 'react';
import axios from 'axios';
import btoa from 'btoa';
import MainPage from "./MainPage"
import avatar from "./media/1ceac0b83e8307449c91f21113b21762.jpg"
import banniere from "./media/Vogue_Merry_Anime_Infobox.png"
import './styles/ProfilBox.css'
import Editor from './Editor';
import EditorPP from './EditorPP';
import EditorBan from './EditorBan';

function MiniProfilBox({userid, setProfilFriend}) {
    const [name, setName] = useState();
    const [login,setLogin] = useState();
    const [desc,setDesc] = useState();
    const [lieu,setLieu] = useState();
    const [anniv,setAnniv] = useState();    
    const [shedit,setShedit] = useState(false);
    const [sheditpp,setSheditpp] = useState(false);
    const [sheditban,setSheditban] = useState(false);
    const [image,setImage] = useState("")
    const [imageban,setImageban] = useState("")
    

    const api=axios.create({
        withCredentials: 'true',
        baseURL: 'http://localhost:4000'
    });

    useEffect(() => {
        console.log(userid)
        api.get("/api/user/"+(userid+""=="undefined"?"":userid)
        ).then(response => {
            console.log(response.data.user)
            const {name,login} = response.data.user;

            setName(name);
            setLogin(login);


            setImage( btoa(new Uint8Array(response.data.image.img.data).reduce(function (data, byte) {
                return data + String.fromCharCode(byte);
            }, '')));
        });
    });

    function goprofil() {
        try {
            setProfilFriend(userid);
        } catch (error) {
            console.log(error)
        }
        
    };

    const s="data:image/png;base64,"+image;

    // console.log(s);
        return (
            <div className="miniprofilpage">
                    <div className="avatar" onClick={goprofil}>
                        <img src={s}></img>
                    </div>
                    <div className="header">
                        <div className='username'>
                            <span>{name} </span>
                        </div>
                        <div className='id'>
                            <span>@{login}</span>
                        </div>
                    </div>
                
                    
            </div>
        )
}
export default MiniProfilBox;
