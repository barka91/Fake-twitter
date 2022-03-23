import React, { Component } from 'react';


import twitter from "./media/twitter.svg"
class SideBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="sidebar">
              
            
                <div className="home">
                  <img src={twitter}/>
                  <h2>Home</h2>
                </div>
              
        
            </div>
          );
    }
}

export default SideBar;