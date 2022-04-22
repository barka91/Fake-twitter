import React, { Component } from 'react';
import "./styles/Post.css"
import avatar from "./media/1ceac0b83e8307449c91f21113b21762.jpg"
import banniere from "./media/Vogue_Merry_Anime_Infobox.png"
import image from "./media/sanji.png"
class Post extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="post elem">
                    <div className="avatar">
                        <img src={avatar}></img>
                    </div>
                    <div className="post_main">
                       <div className="header">
                            <div className='username'>
                                <span>usopp </span>
                            </div>
                            <div className='id'>
                                <span>@sogeking</span>
                            </div>
                            <div className='date_publication'>
                                <span> · 3 sept. 2021</span>
                            </div>
                        </div>
                        <div className="tweet">
                            <div className='text'>
                                <span>Je suis entrain de lakjdkjmanger de la brioche comment c'est bon. Sanji il est trop fort</span>
                            </div>
                            <div className="photo">
                                <img src={image}></img>
                            </div>

                        </div>
                    </div>
            </div>
        )
    }
}
export default Post;