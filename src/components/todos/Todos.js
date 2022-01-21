import './Todos.scss';

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
      </li>
      <li className="todo">
        <input type="checkbox" className="todo__checkbox" />
        <p className="todo__content">Buy apples</p>
      </li>
    </ul>
  );
};

export default Todos;
