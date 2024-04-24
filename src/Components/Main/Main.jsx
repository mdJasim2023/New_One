import React from 'react'
import './main.css'
import { assets } from '../../Assests/assets'
const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Use Me</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can I help you Today</p>
            </div>
            <div className="cards">
                <div className="carrd">
                    <div>Suggest Beautiful places to see on an upcoming road trip.</div>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="carrd">
                    <div>Briefly summarize this concept : urban planing.</div>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="carrd">
                    <div>Brainstrom team bonding activities for our worl retreat.</div>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="carrd">
                    <div>Improve the readability of the following code.</div>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
        </div>

        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder='Enter a prompt here'/>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.send_icon} alt="" />
            </div>
            <p className="bottom-info">
                This Application display inaccurate info, including about people, so double-check its responses. Your privacy and this App.
            </p>
        </div>
    </div>
  )
}

export default Main