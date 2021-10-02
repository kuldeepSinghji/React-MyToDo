import React from 'react'
import "./TodoItems.css"
export default function TodoItems(props) {

    return (
        <>
            <div className="items">
                <li>{props.id + 1}. {props.Items}</li>
                <div className="buttonBox">
                    <button onClick={props.editItems}>🖊</button>
                    <button className="cross" onClick={() => { props.onSelect(props.id) }} >X</button>
                </div>
            </div>
        </>
    )
}
