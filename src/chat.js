import React, { useState } from 'react';
import "./styles/Chat.css"
import TalkLeft from './TalkLeft';
import TalkRight from './TalkRight';
import send from "./media/send.svg"
import avatar2 from "./media/1ceac0b83e8307449c91f21113b21762.jpg"
import avatar1 from "./media/luffy.jpg"



function chat() {
    return (
        <div class="chat-global">
            
            <div class="nav-top">
                <div class="utilisateur">
                        <p>luffy</p>
                </div>
            </div>

            <div class="conversation">
                <div class="talk left">
                    <img src={avatar1}/>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="talk right">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <img src={avatar2}/>
                </div>
                <div class="talk left">
                    <img src={avatar1}/>
                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                </div>
                <div class="talk right">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <img src={avatar2}/>
                </div>
                <TalkLeft></TalkLeft>
                <TalkRight></TalkRight>
            </div>


            <form class="chat-form">

                <div class="container-inputs-stuffs">

                    <div class="group-inp">
                        <textarea placeholder="Enter your message here" minlength="1" maxlength="1500"></textarea>
                    </div>
                    <button class="submit-msg-btn">
                        <img src={send}/>
                    </button>
                </div>

            </form>
        </div>
    
    )
}

export default chat;