import styles from './style/style.module.css';
import iconSearch from '../assets/bx-search-alt.svg';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <span className={styles.nav__title}>EMOJI</span>
      <img className={styles.nav__icon} src={iconSearch} alt="search icon" />
    </nav>
  );
};

export default Navbar;
