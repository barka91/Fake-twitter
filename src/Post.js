import React, { useEffect,useState } from 'react';
import axios from 'axios';
import "./styles/Post.css"
import avatar from "./media/1ceac0b83e8307449c91f21113b21762.jpg"
import banniere from "./media/Vogue_Merry_Anime_Infobox.png"
import image from "./media/sanji.png"
import { base64encode } from 'nodejs-base64';
import btoa from 'btoa';
function Post({postid, setProfilFriend}) {
    const [userid, setUserid] = useState();
    const [content_text,setContenttext] = useState();
    const [image,setImage] = useState("")
    const [name, setName] = useState();
    const [login,setLogin] = useState();
    const [p,setP] = useState("");

    const api=axios.create({
        withCredentials: 'true',
        baseURL: 'http://localhost:4000'
    });

    useEffect(() => {


        api.get("/api/post/p/"+(postid+""=="undefined"?"":postid)
        ).then(response => {
            console.log(response)
            const {userid,content_text} = response.data.post;
            const {data} =response.data.image.img;
            console.log(data.toString());
            setUserid(userid);
            setContenttext(content_text);
            // console.log(base64encode(data.toString()));
            
            setImage( btoa(new Uint8Array(data).reduce(function (data, byte) {
                return data + String.fromCharCode(byte);
            }, '')));
            // btoa(String.fromCharCode(...new Uint8Array(img)))
            
            
        });

        console.log(userid);
        api.get("/api/user/"+(userid+""=="undefined"?"":userid)
        ).then(response => {
            const {name,login} = response.data;
            setName(name);
            setLogin(login);
            
        });

        
        
    },[]);

    function han() {
        try {
            setProfilFriend(userid);
        } catch (error) {
            console.log(error)
        }
        
    };

    console.log(image);
    const s="data:image/png;base64,"+image;
    console.log(s);
        return (
            <div className="post elem">
                    <div className="avatar" onClick={han}>
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
                                <img src={s}></img>
                            </div>

                        </div>
                    </div>
            </div>
        )
    
}
export default Post;