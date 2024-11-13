import { create } from 'zustand';
import { Todo } from '../types/todo.type';

type TodosStoreState = {
  todos: Todo[];
};

type TodosStoreActions = {
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
  toggleIsCompleted: (id: string) => void;
  clearCompletedTodos: () => void;
  updateTodoList: (newTodosList: Todo[]) => void;
};

const useTodosStore = create<TodosStoreState & TodosStoreActions>()(
  (set, get) => ({
    todos: [],

    addTodo: (todo) => {
      set({ todos: [...get().todos, todo] });
    },
    deleteTodo: (todoId) => {
      set({
        todos: get().todos.filter((todo) => todo.id !== todoId),
      });
    },
    toggleIsCompleted: (todoId) => {
      set({
        todos: get().todos.map((todo) =>
          todo.id === todoId
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      });
    },
    clearCompletedTodos: () => {
      set({
        todos: get().todos.filter((todo) => !todo.isCompleted),
      });
    },
    updateTodoList: (nextTodosList: Todo[]) => {
      set({ todos: nextTodosList });
    },
  })
);

export { useTodosStore };
