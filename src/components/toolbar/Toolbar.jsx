import { Filter } from 'components/shared';
import { useSelector } from 'react-redux';
import boundTodoActions from 'redux/actions/todoActions';
import { useScreenSize } from 'hooks';
import './Toolbar.scss';

const Toolbar = () => {
  const { reachedScreen: reachedMobileScreen } = useScreenSize(600);
  const totalTodosLeft = useSelector(
    (state) => state.todos.todos.filter((el) => !el.isCompleted).length
  );
  const onClearCompletedHandler = () => boundTodoActions.clearCompleted();

  return (
    <>
      <div className="toolbar">
        <p className="toolbar__tasks-left-count">
          <span>{totalTodosLeft}</span> tasks left
        </p>
        {!reachedMobileScreen && (
          <Filter options={['All', 'Active', 'Completed']} />
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
