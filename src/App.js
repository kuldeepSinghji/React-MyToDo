import './App.css';
import React, { useState, useEffect } from "react"
import DeleteAll from './components/DeleteAll';
import Todo from './components/Todo';
import Message from './components/Message';
import Footer from './components/Footer';
function App() {
  const localdata = () => {
    const list = localStorage.getItem("Todo")
    if (list) {
      return JSON.parse(list)
    } else {
      return [];
    }
  }
  const [inputList, setInputList] = useState("")
  const [items, setItems] = useState(localdata())
  const [message, setMessage] = useState("")
  const [togglebutton, setTogglebutton] = useState(false)
  const [isEdititem, setIsEdititem] = useState("");   
  const [messageType, setMessageType] = useState("")
  const listOfItems = () => {
    if (!inputList) {
      setMessage("Please fill the Input Firstly..")
      setMessageType("Error")
    }else if(inputList && togglebutton){
      setItems(
        items.map((element,index)=>{
          if(index === isEdititem){
            setMessage("Item has been Successfully Updated..")
            setMessageType("Success")
            return inputList;
          }else{
            return element;
          }
        })
      )
      setInputList("")
      setTogglebutton(false)
    }
    else {
      setItems((oldItems) => {
        setMessageType("Success")
        setMessage("Item has been Successfully Inserted")
        return [...oldItems, inputList]
      })
      setInputList("")
    }
  }
  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        setMessage(arrElement + "item has been deleted Sucessfully..")
        setMessageType("Success")
        return index !== id
      })
    })
  }
  useEffect(() => {
    localStorage.setItem("Todo", JSON.stringify(items))
  }, [items])
  const deleteAll = () => {
    let c =window.confirm("Are you sure to want to delete all the files");
    if(c === true){
    setItems([])
    setMessage("All Items  have been deleteted sucessfully...")
    setMessageType("Success")
    }
  }
  setTimeout(() => {
    setMessage("")
    setMessageType("")
  }, 2000);
  return (
    <>
      <Message messageType={messageType} message={message}/>
      <div className="appContainer">
        <Todo inputList={inputList} setInputList={setInputList}  listOfItems={listOfItems} togglebutton={togglebutton} setTogglebutton={setTogglebutton} items={items} setIsEdititem={setIsEdititem} deleteItems={deleteItems}/>
        <DeleteAll deleteAll={deleteAll} />
      </div>
      <Footer/>
    </>
  );
}

export default App;
