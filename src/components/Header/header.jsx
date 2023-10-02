import logo from '../../assets/logo_SportSee.png';

import styles from './header.module.css';

export function Header() {
  return (
    <header>
      <img className={styles.logo} src={logo} alt='Logo SportSee' />
      <nav aria-label='Navigation principale'>
        <ul className={styles.headerList}>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglages</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  );
}
