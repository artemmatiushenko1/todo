import TodoForm from 'components/todo-form/TodoForm';
import './App.scss';
import Todos from 'components/todos/Todos';
import Card from 'components/helpers/Card';
import Toolbar from 'components/toolbar/Toolbar';
import Header from 'components/header/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <Card>
        <TodoForm />
      </Card>
      <Card>
        <Todos />
        <Toolbar />
      </Card>
    </div>
  );
}

export default App;
