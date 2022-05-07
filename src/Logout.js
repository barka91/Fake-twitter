import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import MainPage from "./MainPage"
import setLogout from "./MainPage"

function Logout({method}) {
    

        return (
            <div>
                <a href='#' className='Deconnexion' onClick={method}>
                  <div className='section'>
                    <i><FontAwesomeIcon icon={faRightFromBracket}/></i>
                    <div className='text'>
                      <h2>Deconnexion</h2>
                    </div>
                  </div>
                </a>
            </div>
            
        )
}
export default Logout;