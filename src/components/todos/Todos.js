import './Todos.scss';
import TodoItem from './TodoItem';
import { filteringOptions } from 'helpers';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Todos = () => {
  const { todos, filter } = useSelector((state) => state.todos);
  const [filteredTodos, setfilteredTodos] = useState([]);

  useEffect(() => {
    if (filter) {
      setfilteredTodos(filteringOptions.get(filter)(todos));
    } else {
      setfilteredTodos(todos);
    }
  }, [filter, todos]);

  return (
    <ul className="todos">
      {filteredTodos.map(({ id, text, isCompleted }) => {
        return (
          <TodoItem key={id} content={text} id={id} isCompleted={isCompleted} />
        );
      })}
    </ul>
  );
};

export default Todos;
