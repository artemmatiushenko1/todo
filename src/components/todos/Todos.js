import './Todos.scss';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { filterSelector, todoSelector } from 'redux/selectors/todo';
import boundToDoActions from 'redux/actions/todoActions';

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
  const dragItemPosition = useRef();
  const dragOverPosition = useRef();

  useEffect(() => {
    setFilteredTodos(todoFilters.get(filter)(todos));
  }, [filter, todos]);

  const removeTodoHighlight = (e) => {
    const todoItem = e.target.closest('.todo');
    if (!todoItem) return;
    todoItem.classList.remove('drop-background');
  };

  const onDragStartHandler = (e, position) => {
    dragItemPosition.current = position;
  };

  const onDragOverHandler = (e, position) => {
    e.preventDefault();
    dragOverPosition.current = position;
    const todoItem = e.target.closest('.todo');
    if (!todoItem) return;
    todoItem.classList.add('drop-background');
  };

  const onDragEndHandler = (e) => {
    e.preventDefault();
    const newList = [...todos];
    const dragItem = newList[dragItemPosition.current];

    newList[dragItemPosition.current] = newList[dragOverPosition.current];
    newList[dragOverPosition.current] = dragItem;

    if (filter) return;
    boundToDoActions.updateTodoList(newList);

    dragItemPosition.current = null;
    dragItemPosition.current = null;
  };

  const onDragLeaveHandler = (e) => {
    removeTodoHighlight(e);
  };

  const onDropHandler = (e) => {
    removeTodoHighlight(e);
  };

  return (
    <ul className="todos">
      {filteredTodos.map(({ id, text, isCompleted }, i) => {
        return (
          <TodoItem
            key={id}
            content={text}
            id={id}
            isCompleted={isCompleted}
            draggable={true && !filter}
            onDragStart={(e) => onDragStartHandler(e, i)}
            onDragOver={(e) => onDragOverHandler(e, i)}
            onDragEnd={onDragEndHandler}
            onDrop={onDropHandler}
            onDragLeave={onDragLeaveHandler}
          />
        );
      })}
    </ul>
  );
};

export default Todos;
