import React, { Component } from 'react';
import "./ProfilPage.css"
import avatar from "./media/1ceac0b83e8307449c91f21113b21762.jpg"
import banniere from "./media/Vogue_Merry_Anime_Infobox.png"

class ProfilPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='profilpage'>
                <div className='profil'>
                    <div className='banniere'>
                        <img src={banniere}/>
                    </div>
                    <div className='avatar'>
                        <img src={avatar}></img>
                    </div>
                    <div className='text'>
                        <div className='username'>
                            <span>usopp </span>
                        </div>
                        <div className='id'>
                            <span>@sogeking</span>
                        </div>
                        <div className='description'>
                            <span>Le vrai capitaine</span>
                        </div>                
                        <div className='info'>
                            <div className='lieu'>
                                <span>Sirop, East Blue</span>
                            </div>
                            <div className='date'>
                                <span>Naissance le 1 avril 2001</span>
                            </div>
                        </div>
                            
                    </div>
                </div>

                <div className="post">
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

                       </div>
                    </div>

                </div>
            </div>
                
        )

    }
}
export default ProfilPage;