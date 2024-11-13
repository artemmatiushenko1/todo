import './Todos.scss';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { filterSelector, todoSelector } from '../../redux/selectors/todo';
import { todoActions } from '../../redux/actions/todoActions';
import { useActions } from '../../hooks';
import { Todo } from '../../types/todo.type';

const getAllTodos = (todos: Todo[]) => todos;
const getActiveTodos = (todos: Todo[]) =>
  todos.filter((todo) => !todo.isCompleted);
const getCompletedTodos = (todos: Todo[]) =>
  todos.filter((todo) => todo.isCompleted);

const todoFilters = new Map([
  ['0', getAllTodos],
  ['1', getActiveTodos],
  ['2', getCompletedTodos],
]);

const Todos = () => {
  const todos: Todo[] = useSelector(todoSelector);
  const filter: string = useSelector(filterSelector);

  const dragItemPosition = useRef<number | null>(null);
  const dragOverPosition = useRef<number | null>(null);
  const { updateTodoList } = useActions(todoActions);

  const filteredTodos = (todoFilters.get(filter)?.(todos) || []) as Todo[];

  const removeTodoHighlight = (e: React.DragEvent<HTMLLIElement>) => {
    if (e.target instanceof HTMLLIElement) {
      const todoItem = e.target.closest('.todo');
      if (!todoItem) return;
      todoItem.classList.remove('drop-background');
    }
  };

  const onDragStartHandler = (position: number) => {
    dragItemPosition.current = position;
  };

  const onDragOverHandler = (
    e: React.DragEvent<HTMLLIElement>,
    position: number
  ) => {
    e.preventDefault();

    dragOverPosition.current = position;

    if (e.target instanceof HTMLLIElement) {
      const todoItem = e.target.closest('.todo');
      if (!todoItem) return;
      todoItem.classList.add('drop-background');
    }
  };

  const onDragEndHandler = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();

    if (dragItemPosition.current === null || dragOverPosition.current === null)
      return;

    const newList = [...todos];
    const dragItem = newList[dragItemPosition.current];

    newList[dragItemPosition.current] = newList[dragOverPosition.current];
    newList[dragOverPosition.current] = dragItem;

    if (filter) return;
    updateTodoList(newList);

    dragItemPosition.current = null;
    dragItemPosition.current = null;
  };

  const onDragLeaveHandler = (e: React.DragEvent<HTMLLIElement>) => {
    removeTodoHighlight(e);
  };

  const onDropHandler = (e: React.DragEvent<HTMLLIElement>) => {
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
            onDragStart={() => onDragStartHandler(i)}
            onDragOver={(e) => onDragOverHandler(e, i)}
            onDragEnd={onDragEndHandler}
            onDrop={onDropHandler}
            onDragLeave={onDragLeaveHandler}
          />
        );
      })}
      {filteredTodos.length === 0 ? (
        <div className="message">No todos found</div>
      ) : null}
    </ul>
  );
};

export default Todos;
