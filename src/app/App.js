import TodoForm from 'components/todo-form/TodoForm';
import Header from 'components/header/Header';
import './App.scss';
import Todos from 'components/todos/Todos';

function App() {
  return (
    <div className="app">
      <Header />
      <TodoForm />
      <Todos />
    </div>
  );
}

export default App;
