import './Todos.scss';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    console.log(todos);
  });

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
