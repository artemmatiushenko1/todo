import './ThemeToggle.scss';
import { themeActions } from 'redux/actions/themeActions';
import { useSelector } from 'react-redux';
import { isDarkThemeSelector } from 'redux/selectors/theme';
import { useActions } from 'hooks';

const ThemeToggle = () => {
  const isDarkTheme = useSelector(isDarkThemeSelector);
  const { setTheme } = useActions(themeActions);

  const onThemeToggleHandler = () => {
    setTheme(!isDarkTheme);
  };

  return (
    <input
      className="theme-toggle"
      type="checkbox"
      checked={isDarkTheme}
      onChange={onThemeToggleHandler}
    />
  );
};

export default ThemeToggle;
