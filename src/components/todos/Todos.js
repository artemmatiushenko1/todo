import './Todos.scss';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const Todos = () => {
  const { todos } = useSelector((state) => state);

  return (
    <ul className="todos">
      {todos.map((todo) => {
        return <TodoItem content={todo.text} key={todo.id} id={todo.id} />;
      })}
    </ul>
  );
};

export default Todos;
