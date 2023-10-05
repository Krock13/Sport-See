/**
 * Sidebar component that displays a list of activity icons and a copyright notice.
 * @returns {JSX.Element} The rendered JSX element.
 */
import yoga from '../../assets/yoga.png';
import velo from '../../assets/velo.png';
import natation from '../../assets/natation.png';
import musculation from '../../assets/musculation.png';

import styles from './sidebar.module.css';

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      {/* Secondary navigation with activity icons */}
      <nav aria-label='Navigation secondaire'>
        <ul className={styles.list}>
          <li>
            <img src={yoga} />
          </li>
          <li>
            <img src={velo} />
          </li>
          <li>
            <img src={natation} />
          </li>
          <li>
            <img src={musculation} />
          </li>
        </ul>
      </nav>

      {/* Copyright notice */}
      <p className={styles.copyright}>Copyright, SportSee 2020</p>
    </div>
  );
}
