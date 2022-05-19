import { ReactComponent as IconRemove } from 'assets/images/icon-cross.svg';
import { todoActions } from 'redux/actions/todoActions';
import { useActions } from 'hooks';

import './TodoItem.scss';

const TodoItem = ({
  content,
  id,
  isCompleted,
  draggable = false,
  onDragStart,
  onDragOver,
  onDragEnd,
  onDragLeave,
  onDrop,
}) => {
  const { toggle, remove } = useActions(todoActions);
  const onCompletedChangeHandler = () => toggle(id);
  const onDeleteHandler = () => remove(id);
  const classNames = `todo ${isCompleted ? 'completed' : ''}`;

  return (
    <li
      id={id}
      className={classNames}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
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
