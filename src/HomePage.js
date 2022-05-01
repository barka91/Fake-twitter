import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Post from './Post';
import TweetBox from './TweetBox';

function HomePage() {
    const [list_post, setListPost] = useState([]);
    const api=axios.create({
        withCredentials: 'true',
        baseURL: 'http://localhost:4000'
    });

    useEffect(() => {
        api.get("/api/post/all"
        ).then(response => {
            setListPost(response.data) 
        }) 
    },[]);

    return(
            <div className='homepage'>
                <TweetBox /> 
                {(list_post.reverse()).map(item => ( 
                    <Post postid={item._id}/>
                ))}       
                
            </div>
        );

}
export default HomePage;