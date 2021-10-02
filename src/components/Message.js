import React from 'react'
import "./Message.css"
export default function Message(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <>
        <div className={`messageBox ${props.messageType}`}>
        <p id="para">{props.messageType} {capitalize(props.message)}</p>
        </div>     
        </>
    )
}
