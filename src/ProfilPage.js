import React, { Component } from 'react';
import Post from "./Post"
import ProfilBox from './ProfilBox'



class ProfilPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='profilpage'>
                <div className='profil elem'>
                    <ProfilBox/>
                </div>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>

        )

    }
}
export default ProfilPage;