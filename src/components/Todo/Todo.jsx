import React from 'react'
import "./Todo.css"

const Todo = ({ type, handelChange, clickEnter, addItem, toggleEdit, deletAll, add }) => {

    return (

        <>
            <div className='todo-input-add-delete'>

                <div className="todo-input">
                    <input value={type} onChange={handelChange} onKeyDown={clickEnter} type="search" placeholder='Add To Do List...' />
                </div>

                <div className="buttons">

                    <div className="add-edit">
                        <button className='btn' onClick={addItem} disabled={type.length <= 2 ? true : false}>
                            {toggleEdit ? "Edit" : "Add"}
                        </button>
                    </div>

                    <div className="deletAll">
                        <button className='btn' onClick={deletAll} disabled={add.length < 1 ? true : false} >Delete All</button>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Todo
