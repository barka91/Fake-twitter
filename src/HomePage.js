import React, { Component } from 'react';
import './styles/HomePage.css'
import Post from './Post';
import TweetBox from './TweetBox';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='homepage'>
                <div className='tweet-input'>
                    <TweetBox />
                </div>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        );
        

    }
}
export default HomePage;