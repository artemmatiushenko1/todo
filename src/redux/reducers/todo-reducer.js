import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED } from '../types';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [...state, action.payload];
    }
    case DELETE_TODO: {
      const updatedTodos = state.filter((el) => el.id !== action.payload);
      return updatedTodos;
    }
    case TOGGLE_COMPLETED: {
      const id = action.payload;
      const todoIndex = state.findIndex((el) => el.id === id);
      const updatedTodo = state[todoIndex];
      updatedTodo.isCompleted = !updatedTodo.isCompleted;
      const updatedTodos = [...state];
      updatedTodos[todoIndex] = updatedTodo;
      return updatedTodos;
    }
    default: {
      return state;
    }
  }
};

export default todoReducer;
