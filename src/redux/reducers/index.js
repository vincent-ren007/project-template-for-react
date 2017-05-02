import * as actionTypes from '../actionsCreators/actionTypes'
export function windowWidth(state = 0, action){
  switch(action.type){
    case actionTypes.RENEW_WINDOW_WIDTH:
      state = action.newWidth
      break
  }
  return state
}

export function todoList(state = [], action){
  switch(action.type){
    case actionTypes.ADD_TODO:
      state = [...state, action.todo]
      break
    case actionTypes.REMOVE_TODO:
      state = [...state.slice(0, action.todoIndex), ...state.slice(action.todoIndex + 1)]
  }
  return state
}
