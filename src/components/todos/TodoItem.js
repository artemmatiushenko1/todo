import { ReactComponent as IconRemove } from 'assets/images/icon-cross.svg';
import { useDispatch } from 'react-redux';
import { toogleCompleted, deleteTodo } from 'redux/actions';
import './TodoItem.scss';

const TodoItem = ({ content, id, isCompleted }) => {
  const dispatch = useDispatch();
  const onCompletedChangeHandler = () => dispatch(toogleCompleted(id));
  const onDeleteHandler = () => dispatch(deleteTodo(id));
  const classNames = `todo ${isCompleted ? 'completed' : ''}`;

  return (
    <li className={classNames} id={id}>
      <input
        type="checkbox"
        className="todo__checkbox"
        onChange={onCompletedChangeHandler}
        checked={isCompleted}
      />
      <p className="todo__content">{content}</p>
      <div className={`todo__remove-btn`} onClick={onDeleteHandler}>
        <IconRemove />
      </div>
    </li>
  );
};

export default TodoItem;
