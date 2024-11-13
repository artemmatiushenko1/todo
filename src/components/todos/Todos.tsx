import './Todos.scss';
import TodoItem from './TodoItem';
import { Todo } from '../../types/todo.type';
import { TodoStatus } from '../../constants';
import { useTodosStore } from '../../zustand/todos.store';
import { useDnd } from '../../hooks/use-dnd';

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

  const {
    handleDragEnd,
    handleDragLeave,
    handleDragOver,
    handleDragStart,
    handleDrop,
  } = useDnd<Todo>({
    getItems: () => useTodosStore.getState().todos,
    updateItems: (newTodos) => {
      // TODO: update todo list
      useTodosStore.getState().updateTodoList(newTodos);
    },
  });

  const filteredTodos = (todoFilters.get(filter)?.(todos) || []) as Todo[];

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
