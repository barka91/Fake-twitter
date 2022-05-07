import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Post from "./Post"
import ProfilBox from './ProfilBox'

function ProfilPage({userid}) {
    const [list_post, setListPost] = useState([]);
    const [p,setP] = useState(0)
    const api=axios.create({
        withCredentials: 'true',
        baseURL: 'http://localhost:4000'
    });

    useEffect(() => {

        console.log(userid+" profile page");
        api.get("/api/post/"+(userid+""=="undefined"?"":userid)
        ).then(response => {
            setListPost(response.data) 
        }) 
        
    },[userid]);
 
    return (
        <div className='profilpage'>
            <div className='profil elem'>
                <ProfilBox userid={userid}/>
                {(list_post).map(item => ( 
                    <Post postid={item._id}/>
                ))}       
            </div>

        </div>

    ) 
}
export default ProfilPage;