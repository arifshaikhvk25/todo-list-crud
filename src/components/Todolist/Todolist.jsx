import React from 'react'
import "./Todolist.css"

const Todolist = ({ setType, add, setAdd, setToggleEdit, setEditUpdate  }) => {

    const handelDelet = (id) => {
        const delBtn = add.filter((eachAddList) => {
            return (
                eachAddList.id !== id
            )
        })
        setAdd(delBtn)
    }

    const edit = (id) => {
        const editBtn = add.find((eachAddList) => {
            return (
                eachAddList.id === id
            )
        })
        setType(editBtn.name)
        setToggleEdit(true)
        setEditUpdate(id)
    }


    return (
        <div className='todo-list-container'>

            {add?.length !== 0 ?  
                add.map((eachAddList) => {
                    return (
                        <div className='todo-lists' key={eachAddList.id}>
                            <div className='addedList' >
                                {eachAddList.name}
                            </div>

                            <div className="buttons">

                                <div className="edit">
                                    <button className='btn1'  onClick={() => { edit(eachAddList.id) }} >Edit</button>
                                </div>

                                <div className="delete">
                                    <button className='btn1' onClick={() => { handelDelet(eachAddList.id) }} >Delete</button>
                                </div>

                            </div>
                        </div>
                    )
                }) : <p className='no-list'>"No Items To Display"</p>
            }

        </div>
    )
}

export default Todolist
