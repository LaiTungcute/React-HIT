import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addToDo, deleteToDo } from './actions';

//useSelector(): hooks lưu trữ thông tin vào store
//useDisPatch(): hooks thực hiện các action
const Page = () => {
    const list = useSelector(state => state.todoList); console.log(list);
    const [value, setValue] = React.useState('');
    const dispatch = useDispatch();
    const handleClickAdd = () => {
        dispatch(addToDo(value))
        setValue('');
    }
    const handleClickDelete =  (data) => {
        dispatch(deleteToDo(data))
    }
  return (
    <div>
        <input type="text" name="text" placeholder='Nhap vao de'value={value}  onChange={(e) => setValue(e.target.value)}/>
        <button onClick={handleClickAdd}>Add</button>
        {
            list && (
                list.map((item, index) => (
                    <ul key={index}>
                        <li>
                            {item}
                            <h1 onClick={() => handleClickDelete(item)}>X</h1>
                        </li>
                    </ul>
                ))
            )
        }
    </div>
  )
}

export default Page