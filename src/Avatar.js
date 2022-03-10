import React, { Component } from 'react';
import MainPage from "./MainPage"
import "./avatar.css"

class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image : props.image
        };
    }

    
    render() {
        return (
            <div className="Avatar">
                <img src={this.state.image}/>
            </div>
            
        )

    }S
}
export default Avatar;