import React from 'react'
import TodoItems from './TodoItems';
import "./Todo.css"
export default function Todo(props) {
    const editItems = (itemIndex) => {
        console.log("clicked", itemIndex)
        const updateItem = props.items.find((currItem, index) => {
            return index === itemIndex;
        })
        props.setInputList(updateItem)
        props.setIsEdititem(itemIndex)
        props.setTogglebutton(true)
    }
    const itemEvent = (event) => {
        props.setInputList(event.target.value)
      }
    return (
        <>
            <div className="todo">
                <div className="heading">
                    <h1>My Todo List</h1>
                </div>
                <div className="inputBox">
                    <input type="text" value={props.inputList} placeholder="✍  Add a item" onChange={itemEvent} />
                    <div className="addItemBox">
                        {props.togglebutton ? <button onClick={props.listOfItems} style={{ cursor: "pointer" }}>🖊</button> : <button onClick={props.listOfItems}>+</button>
                        }
                    </div>
                </div>
                <hr/>
                <div className="showItemBox">
                    {props.items.length === 0?"Nothing to show..":props.items.map((items, itemIndex) => {
                        return <TodoItems Items={items} key={itemIndex} id={itemIndex} onSelect={props.deleteItems} editItems={() => editItems(itemIndex)} />
                    })}
                </div>
            </div>
        </>
    )
}
