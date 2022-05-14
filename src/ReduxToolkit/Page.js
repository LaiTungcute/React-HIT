import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addTodo, deleteTodo, getAllTodo} from './todoSlice'

const Page = () => {
    const selector = useSelector(state => state.todo); console.log(selector);
    const dispatch = useDispatch();
    const [value, setValue] = useState();
    const handleAdd = () => {
        dispatch(addTodo(value))
        setValue('')
    }
    const handleDelete = (data) => {
        dispatch(deleteTodo(data))
    }

    useEffect(() => {
        dispatch(getAllTodo())
    }, []);
  return (
    <div>
        {/* <input type='text' value={value} placeholder='Nhap vao day' onChange={(e) => setValue(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
        {selector && (
            selector.map(item => (
                <ul key={item}>
                    <li>
                        {item}
                        <h1 onClick={() => handleDelete(item)}>X</h1>
                    </li>
                </ul>
            ))
        )} */}

        {
            selector && (
                selector.map(item => (
                    <ul key={item}>
                        <li key={item}>{item.id}</li>
                    </ul>
                ))
            )
        }
    </div>
  )
}

export default Page