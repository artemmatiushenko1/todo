import { ReactComponent as IconRemove } from 'assets/images/icon-cross.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toogleCompleted } from 'redux/actions';
import './TodoItem.scss';

const TodoItem = ({ content, id }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const { isCompleted } = useSelector((state) => {
    return state.todos.find((el) => el.id === id);
  });
  const dispatch = useDispatch();
  const onMouseOverHandler = () => setIsMouseOver(true);
  const onMouseOutHanlder = () => setIsMouseOver(false);
  const onCheckBoxChange = () => dispatch(toogleCompleted(id));

  const classNames = `todo ${isCompleted ? 'completed' : ''}`;

  return (
    <li
      className={classNames}
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHanlder}
      id={id}
    >
      <input
        type="checkbox"
        className="todo__checkbox"
        onChange={onCheckBoxChange}
        checked={isCompleted}
      />
      <p className="todo__content">{content}</p>
      <div className={`todo__remove-btn ${!isMouseOver ? 'hidden' : ''}`}>
        <IconRemove />
      </div>
    </li>
  );
};

export default TodoItem;
