import { Filter } from 'components/shared';
import { useSelector } from 'react-redux';
import boundTodoActions from 'redux/actions/todoActions';
import './Toolbar.scss';

const Toolbar = () => {
  const totalTodosLeft = useSelector(
    (state) => state.todos.todos.filter((el) => !el.isCompleted).length
  );
  const onClearCompletedHandler = () => boundTodoActions.clearCompleted();

  return (
    <div className="toolbar">
      <p className="toolbar__tasks-left-count">
        <span>{totalTodosLeft}</span> tasks left
      </p>
      <Filter options={['All', 'Active', 'Completed']} />
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
