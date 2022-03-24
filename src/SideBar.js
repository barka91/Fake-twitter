import React, { Component } from 'react';


import iconHome from "./media/icon_home.png"
class SideBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="sidebar">       
                <div className="home">
                  <h2>Accueil</h2>
                </div>
                <div className="explore">
                  <h2>Explore</h2>
                </div>
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