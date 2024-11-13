import { Input } from '../../components';
import { useState } from 'react';
import './TodoForm.scss';
import { Todo } from '../../types/todo.type';
import { useTodosStore } from '../../zustand/todos.store';

const TodoForm = () => {
  const [todoText, setTodoText] = useState('');
  const addTodo = useTodosStore((store) => store.addTodo);

  const onTodoChangeHnadler: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setTodoText(e.target.value);
  };

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const todo: Todo = {
      id: Date.now().toString(),
      text: todoText,
      isCompleted: false,
    };

    // TODO: Add todo to the store
    addTodo(todo);

    setTodoText('');
  };

  return (
    <form className="todo-form" onSubmit={onSubmitHandler}>
      <div className="todo-form__circle">&nbsp;</div>
      <Input
        type="text"
        placeholder="Create a new todo..."
        value={todoText}
        onChange={onTodoChangeHnadler}
      />
    </form>
  );
};

export default TodoForm;
