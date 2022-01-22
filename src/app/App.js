import './App.scss';
import Card from 'components/helpers/Card';
import { TodoForm, Todos, Toolbar, Header } from 'components';
import { useSelector } from 'react-redux';
import { filteringOptions } from 'constants';

function App() {
  const { todos, filter } = useSelector((state) => state.todos);
  const filteredTodos = filteringOptions.get(filter)(todos);

  return (
    <div className="app">
      <Header />
      <Card>
        <TodoForm />
      </Card>
      <Card>
        <Todos todos={filteredTodos} />
        <Toolbar />
      </Card>
    </div>
  );
}

export default App;
