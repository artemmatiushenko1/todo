import './Todos.scss';
import TodoItem from './TodoItem';
import { filteringOptions } from 'helpers';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { filterSelector, todoSelector } from 'redux/selectors/todo';

const Todos = () => {
  const todos = useSelector(todoSelector);
  const filter = useSelector(filterSelector);
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
