import React, { Component } from 'react';
import SideBar from "./SideBar.js";
import ProfilPage from "./ProfilPage.js";

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SideBar/>
            <ProfilPage/>
        );
    }
}

export default Main;
