import './Toolbar.scss';
import { Filter } from 'components';
import { useSelector } from 'react-redux';
import { todoActions } from 'redux/actions/todoActions';
import { useScreenSize } from 'hooks';
import { filterSelector, todoSelector } from 'redux/selectors/todo';
import { filterOptions } from 'constants';
import { useActions } from 'hooks';

const Toolbar = () => {
  const isMobileScreen = useScreenSize(600);
  const activeFilter = useSelector(filterSelector);
  const todos = useSelector(todoSelector);
  const todosLeft = todos.filter((todo) => !todo.isCompleted).length;
  const { clearCompleted } = useActions(todoActions);
  const onClearCompletedHandler = () => clearCompleted();

  return (
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
  );
};

export default Toolbar;
