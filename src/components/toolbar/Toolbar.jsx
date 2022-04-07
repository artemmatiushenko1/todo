import './Toolbar.scss';
import { Filter } from 'components/shared';
import { useSelector } from 'react-redux';
import boundTodoActions from 'redux/actions/todoActions';
import { useScreenSize } from 'hooks';
import { filterSelector, todoSelector } from 'redux/selectors/todo';

const filterOptions = ['All', 'Active', 'Completed'];

const Toolbar = () => {
  const isMobileScreen = useScreenSize(600);
  const activeFilter = useSelector(filterSelector);
  const todos = useSelector(todoSelector);
  const todosLeft = todos.filter((todo) => !todo.isCompleted).length;
  const onClearCompletedHandler = () => boundTodoActions.clearCompleted();

  return (
    <>
      <div className="toolbar">
        <p className="toolbar__tasks-left-count">
          <span>{todosLeft}</span> tasks left
        </p>
        {!isMobileScreen && (
          <Filter options={filterOptions} value={activeFilter} />
        )}
        <div
          className="toolbar__clear-completed-btn"
          onClick={onClearCompletedHandler}
        >
          Clear Completed
        </div>
      </div>
    </>
  );
};

export default Toolbar;
