import './TodoItem.scss';
import { IconRemove } from '../icon-remove';

type TodoItemProps = {
  content: string;
  id: string;
  isCompleted: boolean;
  draggable: boolean;
  className: string;

  onToggleCompleted: (id: string) => void;
  onDelete: (id: string) => void;

  onDragStart: React.DragEventHandler<HTMLLIElement>;
  onDragOver: React.DragEventHandler<HTMLLIElement>;
  onDragEnd: React.DragEventHandler<HTMLLIElement>;
  onDragLeave: React.DragEventHandler<HTMLLIElement>;
  onDrop: React.DragEventHandler<HTMLLIElement>;
};

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
  onToggleCompleted,
  onDelete,
  className,
}: TodoItemProps) => {
  const handleCheckboxChange = () => onToggleCompleted(id);

  const handleDeleteClick = () => onDelete(id);

  return (
    <li
      id={id}
      className={className}
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
        checked={isCompleted}
        onChange={handleCheckboxChange}
      />
      <p className="todo__content">{content}</p>
      <div className={`todo__remove-btn`} onClick={handleDeleteClick}>
        <IconRemove />
      </div>
    </li>
  );
};

export default TodoItem;
