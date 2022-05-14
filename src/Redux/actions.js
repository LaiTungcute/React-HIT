export const addToDo = (data) => {
    return {
        type: 'addToDo',
        payload: data
    }
}

export const deleteToDo = (data) => {
    return {
        type: 'deleteToDo',
        payload: data
    }
}