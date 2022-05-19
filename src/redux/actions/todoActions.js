import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED,
  CLEAR_COMPLETED,
  SET_FILTER,
  UPDATE_TODOS_LIST,
} from '../types';

const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

const toogleCompleted = (id) => {
  return {
    type: TOGGLE_COMPLETED,
    payload: id,
  };
};

const clearCompleted = (id) => {
  return {
    type: CLEAR_COMPLETED,
    payload: id,
  };
};

const setFilter = (filterId) => {
  return {
    type: SET_FILTER,
    payload: filterId,
  };
};

const updateTodoList = (shuffledList) => {
  return {
    type: UPDATE_TODOS_LIST,
    payload: shuffledList,
  };
};

export const todoActions = {
  add: addTodo,
  remove: deleteTodo,
  toggle: toogleCompleted,
  clearCompleted,
  setFilter,
  updateTodoList,
};
