import React from 'react'
import "./DeleteAll.css"
export default function DeleteAll(props) {
    
    return (
            <div className="deleteAll" >
            <button onClick={props.deleteAll}>Delete All</button>
        </div>
    )
}
