/**
 * Header component that displays the main navigation and logo.
 * @returns {JSX.Element} The rendered JSX element.
 */
import logo from '../../assets/logo_SportSee.png';

import styles from './header.module.css';

import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      {/* Logo section */}
      <img className={styles.logo} src={logo} alt='Logo SportSee' />

      {/* Main navigation */}
      <nav aria-label='Navigation principale'>
        <ul className={styles.headerList}>
          <li>
            <Link to='/'>Accueil</Link>
          </li>
          <li>Profil</li>
          <li>Réglages</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  );
}
