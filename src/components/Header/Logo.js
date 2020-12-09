import s from './Header.module.css';
import logo from '../../images/logo.png';

function Logo() {
  return (
    <a
      href="https://www.themoviedb.org/"
      className={s.logo}
      target="_blank"
      rel="noreferrer"
    >
      <img src={logo} alt="tmdb" />
    </a>
  );
}

export default Logo;
