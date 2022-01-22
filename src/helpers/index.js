const getAllTodos = (todos) => todos;
const getActiveTodos = (todos) => todos.filter((todo) => !todo.isCompleted);
const getCompletedTodos = (todos) => todos.filter((todo) => todo.isCompleted);

export const filteringOptions = new Map([
  [0, getAllTodos],
  [1, getActiveTodos],
  [2, getCompletedTodos],
]);
