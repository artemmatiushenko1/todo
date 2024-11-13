import './Todos.scss';
import TodoItem from './TodoItem';
import { useRef } from 'react';
import { Todo } from '../../types/todo.type';
import { TodoStatus } from '../../constants';
import { useTodosStore } from '../../zustand/todos.store';

const todoFilters = new Map([
  [TodoStatus.ANY, (todos: Todo[]) => todos],
  [
    TodoStatus.ACTIVE,
    (todos: Todo[]) => todos.filter((todo) => !todo.isCompleted),
  ],
  [
    TodoStatus.COMPLETED,
    (todos: Todo[]) => todos.filter((todo) => todo.isCompleted),
  ],
]);

type TodosProps = {
  filter: keyof typeof TodoStatus;
};

const Todos = ({ filter }: TodosProps) => {
  // TODO: select todos
  const todos = useTodosStore((store) => store.todos);

  const toggleTodoCompleted = useTodosStore((store) => store.toggleIsCompleted);
  const deleteTodo = useTodosStore((store) => store.deleteTodo);
  const updateTodosList = useTodosStore((store) => store.updateTodoList);

  const dragItemPosition = useRef<number | null>(null);
  const dragOverPosition = useRef<number | null>(null);

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

    // TODO: update todo list
    updateTodosList(newList);

    dragItemPosition.current = null;
    dragItemPosition.current = null;
  };

  const onDragLeaveHandler = (e: React.DragEvent<HTMLLIElement>) => {
    removeTodoHighlight(e);
  };

  const onDropHandler = (e: React.DragEvent<HTMLLIElement>) => {
    removeTodoHighlight(e);
  };

  const handleToggleTodoCompleted = (id: string) => {
    // TODO: toggle todo isCompleted
    toggleTodoCompleted(id);
  };

  const handleDeleteTodo = (id: string) => {
    // TODO: delete todo
    deleteTodo(id);
  };

  return (
    <ul className="todos">
      {filteredTodos.map(({ id, text, isCompleted }, i) => {
        return (
          <TodoItem
            key={id}
            id={id}
            content={text}
            isCompleted={isCompleted}
            draggable={filter === TodoStatus.ANY}
            onToggleCompleted={handleToggleTodoCompleted}
            onDelete={handleDeleteTodo}
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
