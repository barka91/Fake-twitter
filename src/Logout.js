import React, { Component } from 'react';
import MainPage from "./MainPage"
import setLogout from "./MainPage"

function Logout({method}) {
    

        return (
            <div>
                <a href='#' className='Deconnexion' onClick={method}>
                  <div>
                    <div className='icon'>

                    </div>
                    <div className='text'>
                      <h2>Deconnexion</h2>
                    </div>
                  </div>
                </a>
            </div>
            
        )
}
export default Logout;