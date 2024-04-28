import React, { useContext } from 'react'
import './sidebar.css'
import { assets } from '../../Assests/assets'
import { Context } from '../../context/context'
const Sidebar = () => {

    const [extented,setExtented] = React.useState(false)
    const {onSent,prevPrompts,setRecentPropmt} = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPropmt(prompt)
       await onSent(prompt)
    }
    // const extendSideBar = ()=>{
    //     if(extented===true){
    //         setExtented(false)
    //     }
    //     else{
    //         setExtented(true)   This is My Logic (--jasiM--)
    //     }
    // }
    {/* <img className='menu' onClick={()=>{extendSideBar()}} src={assets.menu_icon} alt="" /> */}

  return (
    <div className='sidebar'>
        <div className='top'>
            <img className='menu' onClick={()=>{setExtented(prev=>!prev)}} src={assets.menu_icon} alt="" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="" />
                {extented?<div>New Chat &nbsp;&nbsp;&nbsp;&nbsp;</div>:null}
            </div>
            {extented?
            <div className="recent">
                <p className="recent-title">Recent</p>
                {
                    prevPrompts.map((item,i)=>{
                        return(
                            <div className="recent-entry" onClick={()=>loadPrompt(ClipboardItem)}>
                                <img src={assets.message_icon} alt="" />
                                <div> {item.slice(0,18)}...</div>
                            </div> 
                        )
                    })
                }
            </div>:null}
        </div>
        <div className='bottom'>
            <div className="bottom-item recent-entry" >
                <img src={assets.question_icon} alt="" />
                {extented?<div>Help </div>:null}
            </div>
            <div className="bottom-item recent-entry" >
                <img src={assets.history_icon} alt="" />
                {extented?<div>Activity </div>:null}
            </div>
            <div className="bottom-item recent-entry" >
                <img src={assets.setting_icon} alt="" />
                {extented?<div>Settings </div>:null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar