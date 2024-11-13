import { Todo } from '../../types/todo.type';
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED,
  CLEAR_COMPLETED,
  SET_FILTER,
  UPDATE_TODOS_LIST,
} from '../types';

const addTodo = (todo: Todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  } as const;
};

const deleteTodo = (id: string) => {
  return {
    type: DELETE_TODO,
    payload: id,
  } as const;
};

const toogleCompleted = (id: string) => {
  return {
    type: TOGGLE_COMPLETED,
    payload: id,
  } as const;
};

const clearCompleted = (id: string) => {
  return {
    type: CLEAR_COMPLETED,
    payload: id,
  } as const;
};

const setFilter = (filterId: string) => {
  return {
    type: SET_FILTER,
    payload: filterId,
  } as const;
};

const updateTodoList = (shuffledList: Todo[]) => {
  return {
    type: UPDATE_TODOS_LIST,
    payload: shuffledList,
  } as const;
};

export type TodoActions =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof toogleCompleted>
  | ReturnType<typeof clearCompleted>
  | ReturnType<typeof setFilter>
  | ReturnType<typeof updateTodoList>;

export const todoActions = {
  add: addTodo,
  remove: deleteTodo,
  toggle: toogleCompleted,
  clearCompleted,
  setFilter,
  updateTodoList,
};
