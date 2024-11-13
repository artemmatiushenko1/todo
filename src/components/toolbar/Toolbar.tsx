import './Toolbar.scss';
import { PropsWithChildren } from 'react';
import { Todo } from '../../types/todo.type';

const Toolbar = ({ children }: PropsWithChildren) => {
  // TODO: select todos
  const todos: Todo[] = [];

  const todosLeft = todos.filter((todo) => !todo.isCompleted).length;

  const handleClearCompletedTodosClick = () => {
    // TODO: clear completed todos
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
