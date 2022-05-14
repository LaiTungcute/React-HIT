const initState = [];

const toDoReducer = (state=initState, action) => {
  switch(action.type) {
      case 'addToDo': {
          return [...state, action.payload];
      }
      case 'deleteToDo': {
          const newArr = [...state];
          return newArr.filter((item)=> item!=action.payload);
      }
      default: return state;
  }
}

export default toDoReducer