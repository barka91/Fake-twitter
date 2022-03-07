import React, { Component } from 'react';
import MainPage from "./MainPage"

class TweetBox extends React.Component {
    constructor(props) {
        super(props);
        
    }

    
    render() {
        return (
            <div className='tweetBox'>               
                <input type="text" placeholder="What's happening" />
                <button type="submit">Tweeter</button>
            </div>
            
    

            
        )

    }
}
export default TweetBox;