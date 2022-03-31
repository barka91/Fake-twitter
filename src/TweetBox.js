import React, { Component } from 'react';
import MainPage from "./MainPage"
import avatar from "./media/1ceac0b83e8307449c91f21113b21762.jpg"
import './styles/TweetBox.css'

class TweetBox extends React.Component {
    constructor(props) {
        super(props);
        
    }

    
    render() {
        return (
                <div className='tweetbox'>   
                    <div className="avatar">
                        <img src={avatar}></img>
                    </div>  
                    <div className='tweet-input'>
                        <input type="text" placeholder="What's happening" />
                        <button type="submit">Tweeter</button>
                    </div>          
                    
                </div>  
        )

    }
}
export default TweetBox;