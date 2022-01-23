import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED,
  CLEAR_COMPLETED,
  SET_FILTER,
} from '../types';
import { store } from 'redux/store';
import { bindActionCreators } from 'redux';

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

const boundToDoActions = bindActionCreators(
  {
    add: addTodo,
    delete: deleteTodo,
    toggle: toogleCompleted,
    clearCompleted,
    setFilter,
  },
  store.dispatch
);

export default boundToDoActions;
