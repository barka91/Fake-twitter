import React, { Component } from 'react';
import './SideBar.css'

import iconHome from "./media/icon_home.png"
class SideBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="sidebar">
              <nav className='principal'>
                <a href=''>
                  <div>
                    <div className='icon'>

                    </div>
                    <div className='text'>
                      <h2>Accueil</h2>
                    </div>
                  </div>
                </a>
                <a href='' className='explore'>
                  <div>
                    <div className='icon'>

                    </div>
                    <div className='text'>
                      <h2>Explore</h2>
                    </div>
                  </div>
                </a>

              </nav>       
                
                
                <div className="friends">
                  <h2>Amis</h2>
                </div>
                <div className="message">
                  <h2>Message</h2>
                </div>       
            </div>
          );
    }
}

export default SideBar;