import { Filter } from 'components/basic';
import './Toolbar.scss';

const Toolbar = () => {
  return (
    <div className="toolbar">
      <p className="toolbar__tasks-left-count">5 tasks left</p>
      <Filter />
      <div className="toolbar__clear-completed-btn">Clear Completed</div>
    </div>
  );
};

export default Toolbar;
