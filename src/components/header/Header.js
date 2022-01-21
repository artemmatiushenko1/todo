import './Header.scss';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">todo</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
