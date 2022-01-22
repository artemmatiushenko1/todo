import { Input } from 'components/shared';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/actions';
import './TodoForm.scss';

const TodoForm = () => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();

  const onTodoChangeHnadler = (e) => {
    setTodoText(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const todo = { id: Date.now(), text: todoText, isCompleted: false };
    dispatch(addTodo(todo));
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
