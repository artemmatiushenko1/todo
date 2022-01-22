import { Filter } from 'components/shared';
import { useSelector, useDispatch } from 'react-redux';
import { clearCompleted } from 'redux/actions';
import './Toolbar.scss';

const Toolbar = () => {
  const dispatch = useDispatch();
  const totalTodosLeft = useSelector(
    (state) => state.todos.filter((el) => !el.isCompleted).length
  );
  const onClearCompletedHandler = () => dispatch(clearCompleted());

  return (
    <div className="toolbar">
      <p className="toolbar__tasks-left-count">
        <span>{totalTodosLeft}</span> tasks left
      </p>
      <Filter />
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
