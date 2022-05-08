import React, { useEffect, useState } from 'react';
import btoa from 'btoa';

import MainPage from "./MainPage"
import avatar from "./media/1ceac0b83e8307449c91f21113b21762.jpg"
import './styles/TweetBox.css'
import axios from 'axios';

function TweetBox(params) {
    
        const [imgid,setImgid] = useState();
        const [image,setImage] = useState("");
        const api=axios.create({
            withCredentials: 'true',
            baseURL: 'http://localhost:4000'
        });
        

      
        useEffect(() => {
            api.get("/api/user"
            ).then(response => {
              const {data} =response.data.image.img;

              
              setImage( btoa(new Uint8Array(data).reduce(function (data, byte) {
                  return data + String.fromCharCode(byte);
              }, '')));
            });
        });
        const s="data:image/png;base64,"+image;

    function sendPost(){
        
        var formData = new FormData();
        var imagefile = document.querySelector('#file');
        formData.append("file", imagefile.files[0]);
        api.post('/api/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            setImgid(response.data.id);
            var contenttext = document.getElementById("contenttext").value;
            api.post("/api/post",
                {
                    contenttext:contenttext,
                    imgid: response.data.id,
                    
                }
            ).then(response => {
                console.log(response)
            }
                
            ).catch(error => {
                console.log(error.response)
            });            
        }
            
        )
        

                 
    }


        return (
                <div className='tweetbox'>   
                    <div className="avatar">
                        <img src={s}></img>
                    </div>  
                    <div className='tweet-input'>
                        <input type="text" placeholder="What's happening" id='contenttext' />
                        <input type="file" id='file' name="file" />
                        <input type="button" value="tweeter" onClick = {sendPost}/>
                    </div>          
                    
                </div>  
        )
}
export default TweetBox;