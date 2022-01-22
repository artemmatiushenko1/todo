import './Todos.scss';
import TodoItem from './TodoItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Todos = ({ todos }) => {
  return (
    <ul className="todos">
      <TransitionGroup>
        {todos.map(({ id, text, isCompleted }) => {
          return (
            <CSSTransition key={id} timeout={350} classNames="todo--animated">
              <TodoItem
                key={id}
                content={text}
                id={id}
                isCompleted={isCompleted}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </ul>
  );
};

export default Todos;
