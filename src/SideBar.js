import React, { Component } from 'react';
import avatar from "./media/1ceac0b83e8307449c91f21113b21762.jpg"

import './styles/SideBar.css'

import iconHome from "./media/icon_home.png"
class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          pprofil : props.pprofil, 
          paccueil : props.paccueil
      };
    }

    render() {
        return (
            <div className="sidebar">
              <div className='info' onClick={this.state.pprofil}>
                <div className='avatar'>
                    <img src={avatar} />
                </div>
                <div className='text'>
                    <div className='username'>
                        <span>usopp </span>
                    </div>
                    <div className='id'>
                        <span>@sogeking</span>
                    </div>
                  </div>
              </div>
              <nav className='principal'>
                <a href='#' className='home' onClick={this.state.paccueil}>
                  <div>
                    <div className='icon'>

                    </div>
                    <div className='text'>
                      <h2>Accueil</h2>
                    </div>
                  </div>
                </a>
                <a href='#' className='explore'>
                  <div>
                    <div className='icon'>

                    </div>
                    <div className='text'>
                      <h2>Explore</h2>
                    </div>
                  </div>
                </a>
                <a href='#' className='friends'>
                  <div>
                    <div className='icon'>

                    </div>
                    <div className='text'>
                      <h2>Amis</h2>
                    </div>
                  </div>
                </a>
                <a href='#' className='message'>
                  <div>
                    <div className='icon'>

                    </div>
                    <div className='text'>
                      <h2>Message</h2>
                    </div>
                  </div>
                </a>

              </nav>
            </div>
          );
    }
}

export default SideBar;