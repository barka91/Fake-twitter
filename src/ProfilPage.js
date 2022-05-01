import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Post from "./Post"
import ProfilBox from './ProfilBox'

function ProfilPage() {
    const [list_post, setListPost] = useState([]);
    const api=axios.create({
        withCredentials: 'true',
        baseURL: 'http://localhost:4000'
    });

    useEffect(() => {
        api.get("/api/post"
        ).then(response => {
            setListPost(response.data) 
        }) 
    },[]);
 
    return (
        <div className='profilpage'>
            <div className='profil elem'>
                <ProfilBox/>
                {(list_post.reverse()).map(item => ( 
                    <Post postid={item._id}/>
                ))}       
            </div>

        </div>

    ) 
}
export default ProfilPage;