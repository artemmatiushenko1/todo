import './ThemeToggle.scss';
import boundThemeActions from 'redux/actions/themeActions';
import { useSelector } from 'react-redux';
import { isDarkThemeSelector } from 'redux/selectors/theme';

const ThemeToggle = () => {
  const isDarkTheme = useSelector(isDarkThemeSelector);

  const onThemeToggleHandler = () => {
    boundThemeActions.setTheme(!isDarkTheme);
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
