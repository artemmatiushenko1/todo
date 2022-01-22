import { Filter } from 'components/shared';
import { useSelector } from 'react-redux';
import './Toolbar.scss';

const Toolbar = () => {
  const totalTodosLeft = useSelector(
    (state) => state.todos.filter((el) => !el.isCompleted).length
  );

  return (
    <div className="toolbar">
      <p className="toolbar__tasks-left-count">
        <span>{totalTodosLeft}</span> tasks left
      </p>
      <Filter />
      <div className="toolbar__clear-completed-btn">Clear Completed</div>
    </div>
  );
};

export default Toolbar;
