import './App.scss';
import Card from 'components/helpers/Card';
import { TodoForm, Todos, Toolbar, Header } from 'components';
import { useSelector } from 'react-redux';
import { filteringOptions } from 'helpers';
import useTheme from 'hooks/use-theme';

function App() {
  const { todos, filter } = useSelector((state) => state.todos);
  const { isDarkTheme } = useSelector((state) => state.theme);
  const filteredTodos = filteringOptions.get(filter)(todos);
  useTheme(isDarkTheme);

  return (
    <div className="app">
      <Header />
      <Card>
        <TodoForm />
      </Card>
      <Card>
        <Toolbar />
        <Todos todos={filteredTodos} />
      </Card>
    </div>
  );
}

export default App;
