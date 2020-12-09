import { NavLink } from 'react-router-dom';
import Logo from './Logo';

import s from './Header.module.css';

function Header(props) {
  return (
    <header className={s.header}>
      <nav className={s.navigation}>
        <Logo />
        <NavLink exact to="/" className={s.link} activeClassName={s.linkActive}>
          Home
        </NavLink>
        <NavLink to="/movies" className={s.link} activeClassName={s.linkActive}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
