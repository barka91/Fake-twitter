import React, { useEffect,useState } from 'react';
import avatar from "./media/1ceac0b83e8307449c91f21113b21762.jpg"
import Logout from './Logout';
import './styles/SideBar.css'
import iconHome from "./media/icon_home.png"
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faMessage, faUserGroup } from '@fortawesome/free-solid-svg-icons';


function SideBar( {pprofil ,  paccueil , pmessage , logout} ) {
  const [name, setName] = useState();
  const [login,setLogin] = useState();
  const api=axios.create({
    withCredentials: 'true',
      baseURL: 'http://localhost:4000'
  });

  useEffect(() => {
      api.get("/api/user"
      ).then(response => {
          const {name,login} = response.data;
          setName(name);
          setLogin(login);
          
      });
  });

      return (
          <div className="sidebar">
            <div className='info' onClick={pprofil}>
              <div className='avatar'>
              <img src={avatar} alt="avatar" />
              </div>
              <div className='text'>
                  <div className='username'>
                      <span>{name} </span>
                  </div>
                  <div className='id'>
                      <span>@{login}</span>
                  </div>
                </div>
            </div>
            <a href='#' className='home' onClick={paccueil}>
                <div className='section'>
                  <i><FontAwesomeIcon icon={faHome}/></i>
                  <div className='text'>
                    <h2>Accueil</h2>
                  </div>
                </div>
              </a>
              <a href='#' className='friends'>
                <div className='section'>
                <i><FontAwesomeIcon icon={faUserGroup}/></i>
                  <div className='text'>
                    <h2>Amis</h2>
                  </div>
                </div>
              </a>
              <a href='#' className='message' onClick={pmessage}>
                <div className='section'>
                <i><FontAwesomeIcon icon={faEnvelope}/></i>
                  <div className='text'>
                    <h2>Message</h2>
                  </div>
                </div>
              </a>
              <Logout method={logout}/>

          </div>
        );

}

export default SideBar;

{/*<div className='info' onClick={this.state.pprofil}>
                <div className='avatar'>
                    {/* <img src={avatar} /> 
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
              <Logout method={this.state.logout}/>
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
                
              </nav> */}