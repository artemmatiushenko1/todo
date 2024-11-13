import './App.scss';
import Card from '../components/card/Card';
import { TodoForm, Todos, Toolbar, Header, Filter } from '../components';
import { useSelector } from 'react-redux';
import { useScreenSize } from '../hooks';
import { isDarkThemeSelector } from '../redux/selectors/theme';
import { useEffect, useState } from 'react';
import { filterOptions, TodoStatus } from '../constants';

const App = () => {
  const isMobileScreen = useScreenSize(600);

  const isDarkTheme = useSelector(isDarkThemeSelector);

  const [filter, setFilter] = useState<keyof typeof TodoStatus>(TodoStatus.ANY);

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDarkTheme]);

  return (
    <div className="app">
      <Header />
      <Card>
        <TodoForm />
      </Card>
      <Card>
        <Toolbar>
          {!isMobileScreen && (
            <Filter
              value={filter}
              onChange={setFilter}
              options={filterOptions}
            />
          )}
        </Toolbar>
        <Todos filter={filter} />
      </Card>
      {isMobileScreen && (
        <Card>
          <Filter value={filter} onChange={setFilter} options={filterOptions} />
        </Card>
      )}
    </div>
  );
};

export default App;
