import { RootState } from '../store';

export const todoSelector = (state: RootState) => state.todos.todos;
export const filterSelector = (state: RootState) => state.todos.filter;
