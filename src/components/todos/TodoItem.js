import { ReactComponent as IconRemove } from 'assets/images/icon-cross.svg';
import boundTodoActions from 'redux/actions/todoActions';

import './TodoItem.scss';

const TodoItem = ({ content, id, isCompleted }) => {
  const onCompletedChangeHandler = () => boundTodoActions.toggle(id);
  const onDeleteHandler = () => boundTodoActions.delete(id);
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
