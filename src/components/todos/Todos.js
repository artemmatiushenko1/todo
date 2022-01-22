import './Todos.scss';
import TodoItem from './TodoItem';

const Todos = ({ todos }) => {
  return (
    <ul className="todos">
      {todos.map((todo) => {
        return (
          <TodoItem
            content={todo.text}
            key={todo.id}
            id={todo.id}
            isCompleted={todo.isCompleted}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
