import React, { useEffect,useState } from 'react';
import axios from 'axios';
import "./styles/Post.css"
import avatar from "./media/1ceac0b83e8307449c91f21113b21762.jpg"
import banniere from "./media/Vogue_Merry_Anime_Infobox.png"
import image from "./media/sanji.png"
function Post({postid}) {
    const [userid, setUserid] = useState();
    const [content_text,setContenttext] = useState();
    const [name, setName] = useState();
    const [login,setLogin] = useState();
    const api=axios.create({
        withCredentials: 'true',
        baseURL: 'http://localhost:4000'
    });

    useEffect(() => {


        api.get("/api/post/"+postid
        ).then(response => {
            const {userid,content_text} = response.data;
            setUserid(userid);
            setContenttext(content_text);
            
        });

        api.get("/api/user"
        ).then(response => {
            const {name,login} = response.data;
            setName(name);
            setLogin(login);
            
        });

        
    });
        return (
            <div className="post elem">
                    <div className="avatar">
                        <img src={avatar}></img>
                    </div>
                    <div className="post_main">
                       <div className="header">
                            <div className='username'>
                                <span>{name} </span>
                            </div>
                            <div className='id'>
                                <span>@{login}</span>
                            </div>
                        </div>
                        <div className="tweet">
                            <div className='text'>
                                <span>{content_text}</span>
                            </div>
                            <div className="photo">
                                <img src={image}></img>
                            </div>

                        </div>
                    </div>
            </div>
        )
    
}
export default Post;