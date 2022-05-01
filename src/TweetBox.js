import React from 'react';
import MainPage from "./MainPage"
import avatar from "./media/1ceac0b83e8307449c91f21113b21762.jpg"
import './styles/TweetBox.css'
import axios from 'axios';

function TweetBox(params) {
    

        const api=axios.create({
            withCredentials: 'true',
            baseURL: 'http://localhost:4000'
        });

    function sendPost(){
        
        var contenttext = document.getElementById("contenttext").value;
 
        api.post("/api/post",
            {
                contenttext:contenttext,
            }
        ).then(response => {
            console.log(response)
        }
            
        ).catch(error => {
            console.log(error.response)
        });        
    }


        return (
                <div className='tweetbox'>   
                    <div className="avatar">
                        <img src={avatar}></img>
                    </div>  
                    <div className='tweet-input'>
                        <input type="text" placeholder="What's happening" id='contenttext' />
                        <input type="button" value="tweeter" onClick = {sendPost}/>
                    </div>          
                    
                </div>  
        )
}
export default TweetBox;