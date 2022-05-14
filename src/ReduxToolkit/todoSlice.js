import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

//reduxThunk
export const getAllTodo = createAsyncThunk('getAllTodo', async() => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return res.data
})

const initialState = [];

//createSlice(): tạo 1 slice tích hợp action + reducer
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const resData = action.payload
            state.push(resData)

            // return [...state, action.payload]
        },
        deleteTodo: (state, action) => {
            const newArr = [...state]
            return newArr.filter(item => item!==action.payload)
        }
    },
    extraReducers: {
        [getAllTodo.pending]: (state, action) => {console.log('Đang chờ...');},
        [getAllTodo.fulfilled]: (state, action) => [...action.payload],
        [getAllTodo.rejected]: (state, action) => {console.log('bug rồi...');}
    }
})

export const {addTodo, deleteTodo} = todoSlice.actions
export default todoSlice.reducer;