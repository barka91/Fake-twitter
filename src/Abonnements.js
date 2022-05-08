import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Post from "./Post"
import ProfilBox from './ProfilBox'
import './styles/Abonnements.css'
import MiniProfilBox from './MiniProfilBox';

function Abonnements({list_abonnes,list_abonnements,setProfilFriend}) {
 console.log(list_abonnes);
 console.log(list_abonnements);
    return (
        <div className='abonnement'>
            <h2>Abonnes</h2>
            <div className='list_abonnes'>
                {list_abonnes.map(item => ( 
                    <MiniProfilBox userid={item} />
                ))}
            </div>
            <br></br>
            <div className='list_abonnements'>
                <h2>Abonnements</h2>
                {list_abonnements.map(item => ( 
                    <MiniProfilBox userid={item} setProfilFriend={setProfilFriend}/>
                ))}
            </div>
                       
            

        </div>

    ) 
}
export default Abonnements;