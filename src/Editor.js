import React, { useEffect } from "react";
import "./styles/Editor.css"
import axios from "axios";

function Editor() {
    const api=axios.create({
        withCredentials: 'true',
        baseURL: 'http://localhost:4000'
    });

    useEffect(() => {
        api.get("/api/user/"
        ).then(response => {
            const {name,login} = response.data;
            // setName(name);
            // setLogin(login);
            
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
            <div class="signup-content">
                <div class="signup-form">
                    <h2 class="form-title">Créer votre compte</h2>
                    <form method="POST" class="register-form" id="form">
                        <div class="form-group">
                            <input type="text" name="name" id="name" placeholder="Nom et prenom"/>

                        </div>
                        <div class="form-group">
                            <input type="login" name="login" id="login" placeholder="Nom d'utilisateur"/>

                        </div>
                        <div class="form-group">
                            <input type="text" name="description" id="description" placeholder="Qui suis-je ?" />

                        </div>
                        <div class="form-group">
                            <input type="text" name="lieu" id="lieu" placeholder="Lieu"/>
                        </div>
                        <div class="form-group">
                            <input type="text" name="anniversaire" id="anniversaire" placeholder="Date d'anniversaire"/>
                        </div>
                        <div class="form-group form-button">
                            <input type="button" name="signup" id="signup" class="form-submit" value="Enregistrer" onClick={edit} />
                        </div>
                    </form>
                </div>
            </div>
        </div>        
    );
}

export default Editor;