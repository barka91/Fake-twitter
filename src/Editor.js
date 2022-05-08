import React, { useEffect, useState } from "react";
import "./styles/Editor.css"
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Editor({close}) {
    const [name, setName] = useState();
    const [login,setLogin] = useState();
    const [desc,setDesc] = useState();
    const [lieu,setLieu] = useState();
    const [anniv,setAnniv] = useState(); 


    const api=axios.create({
        withCredentials: 'true',
        baseURL: 'http://localhost:4000'
    });

    useEffect(() => {
        api.get("/api/user/"
        ).then(response => {
            const {name,login,description,lieu,anniversaire} = response.data.user;

            setName(name);
            setLogin(login);
            setDesc(description);
            setLieu(lieu);
            setAnniv(anniversaire);
            
        });
    });

    function edit() {
        var username = document.getElementById("name").value;
        var login = document.getElementById("login").value;
        var lieu = document.getElementById("lieu").value;
        var description = document.getElementById("description").value;
        var anniversaire = document.getElementById("anniversaire").value;
        
        api.post("/api/user/edit",
            {
                name:username,
                login:login,
                lieu:lieu,
                description:description,
                anniversaire :anniversaire 
            }
        ).then(response => {
            console.log(response);
        }
            
        ).catch(error => {
            alert(error);
            console.log(error.response)
        });
    }


    return(
        <div class="container Editor">
            <i onClick={close}><FontAwesomeIcon icon={faXmark}/></i>
                <div class="edit-form">
                    <h2 class="form-title">modifier votre profil</h2>
                    
                    <form method="POST" class="register-form" id="form">
                        <div class="form-group">
                            <input type="text" name="name" id="name" placeholder="Nom et prenom" defaultValue={name}/>

                        </div>
                        <div class="form-group">
                            <input type="login" name="login" id="login" placeholder="Nom d'utilisateur" defaultValue={login} />

                        </div>
                        <div class="form-group">
                            <input type="text" name="description" id="description" placeholder="Description" defaultValue={desc} />

                        </div>
                        <div class="form-group">
                            <input type="text" name="lieu" id="lieu" placeholder="Lieu" defaultValue={lieu}/>
                        </div>
                        <div class="form-group">
                            <input type="date" name="anniversaire" id="anniversaire" placeholder="Date d'anniversaire" defaultValue={anniv}/>
                        </div>
                        <div class="form-group form-button">
                            <input type="button" name="signup" id="signup" class="form-submit" value="Enregistrer" onClick={edit} />
                        </div>
                    </form>
                </div>
            
        </div>        
    );
}

export default Editor;