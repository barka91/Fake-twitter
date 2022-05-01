import React, { useState } from 'react';
import "./styles/Chat.css"
import avatar1 from "./media/luffy.jpg"
function TalkLeft() {
    return (
        <div class="talk left">
                    <img src={avatar1}/>
                    <p>Lorem ipsum dolor sit amet.</p>
        </div>
    )
}
export default TalkLeft;