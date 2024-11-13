import './Todos.scss';
import TodoItem from './TodoItem';
import { Todo } from '../../types/todo.type';
import { TodoStatus } from '../../constants';
import { useDnd } from '../../hooks/use-dnd';
import classNames from 'classnames';

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
  const todos: Todo[] = [];

  const {
    dragOverItemIndex,
    handleDragEnd,
    handleDragLeave,
    handleDragOver,
    handleDragStart,
    handleDrop,
  } = useDnd<Todo>({
    getItems: () => {
      // TODO: get all todos
      return [];
    },
    updateItems: (newTodos) => {
      // TODO: update todo list
    },
  });

  const filteredTodos = todoFilters.get(filter)?.(todos) ?? [];

  const handleToggleTodoCompleted = (id: string) => {
    // TODO: toggle todo isCompleted
  };

  const handleDeleteTodo = (id: string) => {
    // TODO: delete todo
  };

  return (
    <ul className="todos">
      {filteredTodos.map(({ id, text, isCompleted }, i) => {
        return (
          <TodoItem
            key={id}
            id={id}
            content={text}
            className={classNames('todo', {
              completed: isCompleted,
              'drop-background': dragOverItemIndex === i,
            })}
            isCompleted={isCompleted}
            draggable={filter === TodoStatus.ANY}
            onToggleCompleted={handleToggleTodoCompleted}
            onDelete={handleDeleteTodo}
            onDragStart={() => handleDragStart(i)}
            onDragOver={(e) => handleDragOver(e, i)}
            onDrop={handleDrop}
            onDragEnd={handleDragEnd}
            onDragLeave={handleDragLeave}
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
