import React, { useEffect } from "react";

import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function EditorBan({close}) {
    const api=axios.create({
        withCredentials: 'true',
        baseURL: 'http://localhost:4000'
    });

    function editban() {
        var formData = new FormData();
        var imagefile = document.querySelector('#file');
        formData.append("file", imagefile.files[0]);
        api.post('/api/user/ban/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            console.log(response)
        }
            
        ).catch(error => {
            console.log(error.response)
        });
            
        
    }


    return(
        <div class="container Editor">
            <i onClick={close}><FontAwesomeIcon icon={faXmark}/></i>
            <div class="edit-form">
                <input type="file" id='file' name="file" />
                <input type="button" value="soumettre nouvelle banniere" onClick = {editban}/>
            </div>
            
        </div>        
    );
}

export default EditorBan;