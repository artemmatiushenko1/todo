import './ThemeToggle.scss';
import boundThemeActions from 'redux/actions/themeActions';
import { useSelector } from 'react-redux';

const ThemeToggle = () => {
  const { isDarkTheme } = useSelector((state) => state.theme);

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
