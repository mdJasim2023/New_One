import React, { createContext } from "react";
import runChat from "../Configure/Gemini";

export const Context = createContext()

const ContextProvider = (props) => {

    const [input,setInput] = React.useState('')
    const [recentPrompt,setRecentPropmt] = React.useState('');
    const [prevPrompts,setPrevPrompts] = React.useState([]);
    const [showResult,setShowResult] = React.useState(false);
    const [loading,setLoading] = React.useState(false);
    const [resultData,setResultData] = React.useState('')

    const delaytext = (index,nextWord)=>{
        setTimeout(()=>{
            setResultData(prev =>prev + nextWord);
        },75*index)
    }

    const onSent = async (prompt) =>{

        setResultData('')
        setLoading(true)
        setShowResult(true)
        let response;
        if(prompt !== undefined) {
            response = await runChat(prompt);
            setRecentPropmt(prompt)
        }
        else{
            setPrevPrompts(prev =>[...prev,input])
            setRecentPropmt(input)
            response = await runChat(input)
        }
        let responseArray = response.split("**");
        let newResponse ='';
        for(let i=0 ; i < responseArray.length; i++)
        {
            if(i === 0 || i % 2 !== 1){
                newResponse += responseArray[i]
            }
            else{
                newResponse += "<b>" + responseArray[i] + "</b>"
            }
        }
        let newResponse2 = newResponse.split("*").join("<br/>")
        let newResponseArray = newResponse2.split(" ")
        
        for(let i = 0; i < newResponseArray.length; i++){
            const nextWord = newResponseArray[i];
            delaytext(i,nextWord+" ")
        }
        setLoading(false)
        setInput('') 
    }

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPropmt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider