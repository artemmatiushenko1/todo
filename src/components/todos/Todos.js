import './Todos.scss';
import { ReactComponent as IconRemove } from 'assets/images/icon-cross.svg';

const Todos = () => {
  return (
    <ul className="todos">
      <li className="todo done">
        <input type="checkbox" className="todo__checkbox" />
        <p className="todo__content">Buy apples</p>
      </li>
      <li className="todo">
        <input type="checkbox" className="todo__checkbox" />
        <p className="todo__content">Buy apples</p>
        <div className="todo__remove-btn">
          <IconRemove />
        </div>
      </li>
      <li className="todo">
        <input type="checkbox" className="todo__checkbox" />
        <p className="todo__content">Buy apples</p>
      </li>
    </ul>
  );
};

export default Todos;
