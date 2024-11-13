import './Toolbar.scss';
import { PropsWithChildren } from 'react';
import { useTodosStore } from '../../zustand/todos.store';

const Toolbar = ({ children }: PropsWithChildren) => {
  // TODO: select todos
  const todos = useTodosStore((store) => store.todos);
  const clearCompletedTodos = useTodosStore(
    (store) => store.clearCompletedTodos
  );

  const todosLeft = todos.filter((todo) => !todo.isCompleted).length;

  const handleClearCompletedTodosClick = () => {
    // TODO: clear completed todos
    clearCompletedTodos();
  };

  return (
    <div className="toolbar">
      <p className="toolbar__tasks-left-count">
        <span>{todosLeft}</span> tasks left
      </p>
      {children}
      <div
        className="toolbar__clear-completed-btn"
        onClick={handleClearCompletedTodosClick}
      >
        Clear Completed
      </div>
    </div>
  );
};

export default Toolbar;
