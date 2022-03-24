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
                        <span></span>
                </div>

            </div>
        )

    }
}
export default ProfilPage;