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
                <div className="card">
                    <p>sakjfnkdnsf</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>sakjfnkdnsf</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>sakjfnkdnsf</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>sakjfnkdnsf</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main