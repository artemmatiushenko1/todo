import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED,
  CLEAR_COMPLETED,
} from './types';

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const toogleCompleted = (id) => {
  return {
    type: TOGGLE_COMPLETED,
    payload: id,
  };
};

export const clearCompleted = (id) => {
  return {
    type: CLEAR_COMPLETED,
    payload: id,
  };
};
