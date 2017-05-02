import * as actionTypes from './actionTypes'
export function renewWindowWidth(newWidth){
  return {type: actionTypes.RENEW_WINDOW_WIDTH, newWidth}
}

export function addTodo(todo){
  return {type: actionTypes.ADD_TODO, todo}
}

export function removeTodo(todoIndex){
  return {type: actionTypes.REMOVE_TODO, todoIndex}
}
