import React, { useContext } from 'react'
import './main.css'
import { assets } from '../../Assests/assets'
import { Context } from '../../context/context'
const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className='main'>
        <div className="nav">
            <p className='greet2'><span>Use Me ( I Will Satisfy You )</span></p>
            <img src='jasi1.jpg' alt="" height='40px' />
        </div>
        <div className="main-container">

           {
            !showResult?<>
                <div className="greet">
                    <p><span>Hello, Developer.</span></p>
                    <section><p>How can I help you Today..?</p></section>
                </div>
            {/* <div className="cards">
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
            </div> */}
            </>:<div className='result '>
                <div className="result-title">
                    <img src='jasi1.jpg' height='40px' alt="" />
                    <b>{recentPrompt}</b>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {
                        loading?
                        <div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        :<div dangerouslySetInnerHTML={{__html:resultData}}></div>
                    }
                </div>
            </div>
           } 
            
        </div>

        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder='Enter a prompt here' onChange={(e)=>{setInput(e.target.value)}} value={input}/>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.send_icon} alt="" onClick={()=>{onSent()}}/>
            </div>
            <p className="bottom-info">
                This Application display inaccurate info, including about people, so double-check its responses. Your privacy and this App.
            </p>
        </div>
    </div>
  )
}

export default Main