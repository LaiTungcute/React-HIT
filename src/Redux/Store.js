import {combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import toDoReducer from './reducer'
//combineReducers: tổng hợp các reducer
//composeWithDevTools: được sử dụng redux-devtools-extension
//createStore: tạo store
const composeRedux = composeWithDevTools();
const rootReducer = combineReducers({
    todoList: toDoReducer
})
const Store = createStore(rootReducer, composeRedux);

export default Store;