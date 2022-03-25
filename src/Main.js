import React, { Component } from 'react';
import SideBar from "./SideBar.js";
import ProfilPage from "./ProfilPage.js";
import "./Main.css"

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='main'>
                <SideBar />
                <ProfilPage />
            </div>
            
    
        );
    }
}

export default Main;
