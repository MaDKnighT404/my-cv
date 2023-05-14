import './Header.module.scss';
import react from '../../assets/react.svg'

const Header = () => {
  return (
    <header className="header">
      <img alt='logo' src={react} ></img>
      <nav>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
