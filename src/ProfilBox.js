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
import Abonnements from './Abonnements';

function ProfilBox({userid, setProfilFriend}) {
    const [name, setName] = useState();
    const [login,setLogin] = useState();
    const [desc,setDesc] = useState();
    const [lieu,setLieu] = useState();
    const [anniv,setAnniv] = useState(); 
    const [abonnes,setAbonnes] = useState([]); 
    const [abonnements,setAbonnements] = useState([]); 
    const [userabo,setUserabo] = useState([]); 

    // sh: show; edit: editor; pp: photo de profil; ban: banniere
    const [shedit,setShedit] = useState(false); 
    const [sheditpp,setSheditpp] = useState(false);
    const [sheditban,setSheditban] = useState(false);
    const [sheditabo,setSheditabo] = useState(false);
    const [image,setImage] = useState("")
    const [imageban,setImageban] = useState("")
    

    const api=axios.create({
        withCredentials: 'true',
        baseURL: 'http://localhost:4000'
    });

    useEffect(() => {
        api.get("/api/user/"+(userid+""=="undefined"?"":userid)
        ).then(response => {
            console.log(response.data.user)
            const {name,login,description,lieu,anniversaire,abonnes,abonnements} = response.data.user;

            setName(name);
            setLogin(login);
            setDesc(description);
            setLieu(lieu);
            setAnniv(anniversaire);
            setAbonnes(abonnes);
            setAbonnements(abonnements);

            setImage( btoa(new Uint8Array(response.data.image.img.data).reduce(function (data, byte) {
                return data + String.fromCharCode(byte);
            }, '')));

            setImageban( btoa(new Uint8Array(response.data.banniere.img.data).reduce(function (data, byte) {
                return data + String.fromCharCode(byte);
            }, '')));
            

        });
        
        api.get("/api/user/abonnement/"
        ).then(response => {
            setUserabo(response.data.abonnements)
            

        }).catch(err => {
            console.log(err)
        });

            

    },[userid]);


    

    function hideEdit() {
        if (userid=="") {
            setShedit(!shedit);
        }
        
    }

    function hideEditpp() {
        setSheditpp(!sheditpp);

    }
    function hideEditban() {
        setSheditban(!sheditban);
        
    }
    function hideEditabo() {
        setSheditabo(!sheditabo);
    }

    function showDate(date) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString("fr-FR",options);
    }

    function follow() {
        api.get("/api/user/follow/"+userid
        ).then(response => {
            alert("Abonnement reussi!")
        }).catch(error => {
            console.log(error.response)
        });

    }

    function unfollow() {
        api.get("/api/user/unfollow/"+userid
        ).then(response => {
            alert("Desabonnement reussi!")
        }).catch(error => {
            alert(error.response.data.message);
            console.log(error.response)
        });
    }

    const s="data:image/png;base64,"+image;
    const sb="data:image/png;base64,"+imageban;

    let content;
    if (userid==""){
        content = <div>
        <div className='edit'>
            <button onClick={() => hideEdit()}>edit</button>
            {shedit && <Editor close={hideEdit}/>}
        </div>
        <div className='edit'>
            <button onClick={() => hideEditpp()}>modifier photo de profil</button>
            {sheditpp && <EditorPP close={hideEditpp}/>}
        </div>
        <div className='edit'>
            <button onClick={() => hideEditban()}>modifier banniere</button>
            {sheditban && <EditorBan close={hideEditban}/>}
        </div>
    </div>
    }
    else {
        if (userabo.includes(userid)) {
            content =  <div>
        <div className='unfollow'>
            <button onClick={unfollow}>ne plus suivre</button>
        </div>
        
    </div>
        }
        else{
            content =  <div>
        <div className='follow'>
            <button onClick={follow}>Suivre</button>
        </div>
        
    </div>
        }
        
    }
    
        return (
            <div className='profilbox'>
                <div className='banniere'>
                    <img src={sb}/>
                </div>
                <div className='avatar'>
                    <img src={s}></img>
                </div>
                {content}
                <div className='edit'>
                    <button onClick={() => hideEditabo()}>Amis</button>
                    {sheditabo && <Abonnements list_abonnes={abonnes} list_abonnements={abonnements} setProfilFriend={setProfilFriend}/>}
                </div>
                <div className='text'>
                    <div className='username'>
                        <span>{name} </span>
                    </div>
                    <div className='id'>
                        <span>@{login}</span>
                    </div>
                    <div className='description'>
                        <span>{desc}</span>
                    </div>
                    <div className='info'>
                        <div className='lieu'>
                            <span>{lieu}</span>
                        </div>
                        <div className='date'>
                            <span>Naissance le {showDate(anniv)}</span>
                        </div>
                    </div>
                </div>
            </div>
             
        )


}
export default ProfilBox;