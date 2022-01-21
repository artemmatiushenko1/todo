import Input from 'components/basic/Input';
import './TodoForm.scss';

const TodoForm = () => {
  return (
    <form className="todo-form">
      <div className="todo-form__circle">&nbsp;</div>
      <Input type="text" placeholder="Create a new todo..." />
    </form>
  );
};

export default TodoForm;
