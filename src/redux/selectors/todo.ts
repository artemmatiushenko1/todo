import { RootState } from '../store';

export const todosSelector = (state: RootState) => state.todos.todos;
