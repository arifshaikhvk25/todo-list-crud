import React, { useState } from 'react';
import uuid from 'react-uuid';
import { Todo, Todolist } from './components'
import "./App.css"

const App = () => {

  const [type, setType] = useState("");
  const [add, setAdd] = useState([]);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [editUpdate, setEditUpdate] = useState();

  const handelChange = (e) => {
    setType(e.target.value);
  }

  const addItem = () => {

    if (toggleEdit) {
      const newEditList = add.map((editTodo) => {
        if (editTodo.id === editUpdate) {
          return { ...editTodo, name: type }
        }
        return editTodo
      })
      setAdd(newEditList);
      setToggleEdit(false);
      setType("");
      setEditUpdate();

    } else {
      const newItem = { id: uuid(), name: type }
      setAdd([...add, newItem]);
      console.log(newItem);
      setType("")
    }

  }

  const deletAll = () => {
    // window.confirm("Are You Sure You Want To Delete All")
    setAdd([]);
  }

  const clickEnter = (btnPress) => {

    if (toggleEdit && btnPress.key === "Enter") {
      const newEditList = add.map((editTodo) => {
        if (editTodo.id === editUpdate) {
          return { ...editTodo, name: type }
        }
        return editTodo
      })
      setAdd(newEditList);
      setToggleEdit(false);
      setType("");
      setEditUpdate();
    } else {
      if (btnPress.key === "Enter") {
        const newItem = { id: uuid(), name: type }
        setAdd([...add, newItem])
        setType("")
      }
    }
  }

  return (
    <div className='todo-app'>
      <h1 className='h1-tag'>To Do App</h1>

      <Todo type={type} handelChange={handelChange} clickEnter={clickEnter} addItem={addItem} toggleEdit={toggleEdit} deletAll={deletAll} add={add} />

      <Todolist setType={setType} add={add} setAdd={setAdd} setToggleEdit={setToggleEdit} setEditUpdate={setEditUpdate} clickEnter={clickEnter} />

    </div>
  )
}

export default App
