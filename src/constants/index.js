export const filteringOptions = new Map([
  [
    0,
    (todos) => {
      return todos;
    },
  ],
  [
    1,
    (todos) => {
      return todos.filter((todo) => !todo.isCompleted);
    },
  ],
  [
    2,
    (todos) => {
      return todos.filter((todo) => todo.isCompleted);
    },
  ],
]);
