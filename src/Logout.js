import React, { Component } from 'react';
import MainPage from "./MainPage"
import setLogout from "./MainPage"

class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            method : props.method
        };
    }

    
    render() {
        return (
            <div>
                {/* <button type = "submit" onClick = {setLogout}> 
                    Déconnexion
                </button> */}
                <a href='#' className='Deconnexion' onClick={this.state.method}>
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
}
export default Logout;