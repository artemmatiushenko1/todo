import './App.scss';
import Card from 'components/card/Card';
import { TodoForm, Todos, Toolbar, Header, Filter } from 'components';
import { useSelector } from 'react-redux';
import { useScreenSize } from 'hooks';
import { isDarkThemeSelector } from 'redux/selectors/theme';
import { useEffect } from 'react';
import { filterOptions } from 'constants';

const App = () => {
  const isMobileScreen = useScreenSize(600);
  const isDarkTheme = useSelector(isDarkThemeSelector);

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
        <Toolbar />
        <Todos />
      </Card>
      {isMobileScreen && (
        <Card>
          <Filter options={filterOptions} />
        </Card>
      )}
    </div>
  );
};

export default App;
