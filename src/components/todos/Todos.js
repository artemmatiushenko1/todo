import './Todos.scss';
import TodoItem from './TodoItem';
import { filteringOptions } from 'helpers';
import { useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Todos = () => {
  const { todos, filter } = useSelector((state) => state.todos);
  const filteredTodos = filteringOptions.get(filter)(todos);

  return (
    <ul className="todos">
      <TransitionGroup>
        {filteredTodos.map(({ id, text, isCompleted }) => {
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
