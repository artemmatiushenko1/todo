import './Toolbar.scss';
import { useSelector } from 'react-redux';
import { todoActions } from '../../redux/actions/todoActions';
import { todosSelector } from '../../redux/selectors/todo';
import { useActions } from '../../hooks';
import { Todo } from '../../types/todo.type';
import { PropsWithChildren } from 'react';

const Toolbar = ({ children }: PropsWithChildren) => {
  const todos: Todo[] = useSelector(todosSelector);
  const todosLeft = todos.filter((todo) => !todo.isCompleted).length;
  const { clearCompleted } = useActions(todoActions);
  const onClearCompletedHandler = () => clearCompleted();

  return (
    <div className="toolbar">
      <p className="toolbar__tasks-left-count">
        <span>{todosLeft}</span> tasks left
      </p>
      {children}
      <div
        className="toolbar__clear-completed-btn"
        onClick={onClearCompletedHandler}
      >
        Clear Completed
      </div>
    </div>
  );
};

export default Toolbar;
