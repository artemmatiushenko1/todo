import { create } from 'zustand';
import { Todo } from '../types/todo.type';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

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

const stateCreator = immer<TodosStoreState & TodosStoreActions>((set, get) => ({
  todos: [],

  addTodo: (todo) =>
    set((state) => {
      state.todos.push(todo);
    }),
  deleteTodo: (todoId) => {
    set({
      todos: get().todos.filter((todo) => todo.id !== todoId),
    });
  },
  toggleIsCompleted: (todoId) => {
    set({
      todos: get().todos.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
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
}));

const useTodosStore = create<TodosStoreState & TodosStoreActions>()(
  devtools(
    persist(stateCreator, {
      name: 'todos',
      storage: createJSONStorage(() => window.localStorage),
    })
  )
);

export { useTodosStore };
