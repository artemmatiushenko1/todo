import './App.scss';
import Card from 'components/helpers/Card';
import { TodoForm, Todos, Toolbar, Header } from 'components';
import { useSelector } from 'react-redux';
import { Filter } from 'components/shared';
import { useScreenSize, useTheme } from 'hooks';

function App() {
  const { reachedScreen: reachedMobileScreen } = useScreenSize(600);
  const { isDarkTheme } = useSelector((state) => state.theme);
  useTheme(isDarkTheme);

  return (
    <div className="app">
      <Header />
      <Card>
        <TodoForm />
      </Card>
      <Card>
        <Toolbar />
        <Todos />
      </Card>
      {reachedMobileScreen && (
        <Card>
          <Filter options={['All', 'Active', 'Completed']} />
        </Card>
      )}
    </div>
  );
}

export default App;
