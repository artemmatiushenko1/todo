import './App.scss';
import Card from 'components/helpers/Card';
import { TodoForm, Todos, Toolbar, Header } from 'components';
import { useSelector } from 'react-redux';
import { Filter } from 'components/shared';
import { useScreenSize, useTheme } from 'hooks';
import { isDarkThemeSelector } from 'redux/selectors/theme';

function App() {
  const isMobileScreen = useScreenSize(600);
  const isDarkTheme = useSelector(isDarkThemeSelector);
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
      {isMobileScreen && (
        <Card>
          <Filter options={['All', 'Active', 'Completed']} />
        </Card>
      )}
    </div>
  );
}

export default App;
