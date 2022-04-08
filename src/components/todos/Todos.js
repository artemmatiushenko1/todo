import './Todos.scss';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { filterSelector, todoSelector } from 'redux/selectors/todo';

const getAllTodos = (todos) => todos;
const getActiveTodos = (todos) => todos.filter((todo) => !todo.isCompleted);
const getCompletedTodos = (todos) => todos.filter((todo) => todo.isCompleted);

const todoFilters = new Map([
  [0, getAllTodos],
  [1, getActiveTodos],
  [2, getCompletedTodos],
]);

const Todos = () => {
  const todos = useSelector(todoSelector);
  const filter = useSelector(filterSelector);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    setFilteredTodos(todoFilters.get(filter)(todos));
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
