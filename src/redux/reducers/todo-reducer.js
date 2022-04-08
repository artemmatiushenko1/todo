import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED,
  CLEAR_COMPLETED,
  SET_FILTER,
  UPDATE_TODOS_LIST,
} from '../types';

const initialState = {
  todos: [],
  filter: 0,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const updatedTodos = [...state.todos, action.payload];
      return { ...state, todos: updatedTodos };
    }
    case DELETE_TODO: {
      const updatedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return { ...state, todos: updatedTodos };
    }
    case CLEAR_COMPLETED: {
      const updatedTodos = state.todos.filter((todo) => !todo.isCompleted);
      return { ...state, todos: updatedTodos };
    }
    case TOGGLE_COMPLETED: {
      const id = action.payload;
      const todoIndex = state.todos.findIndex((el) => el.id === id);
      const updatedTodo = state.todos[todoIndex];
      updatedTodo.isCompleted = !updatedTodo.isCompleted;
      const updatedTodos = [...state.todos];
      updatedTodos[todoIndex] = updatedTodo;
      return { ...state, todos: updatedTodos };
    }
    case SET_FILTER: {
      return { ...state, filter: action.payload };
    }
    case UPDATE_TODOS_LIST: {
      return { ...state, todos: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default todoReducer;
