import Link from 'next/link';
import Image from 'next/image';

import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';

import logoImg from '@assets/logo.png';

import styles from './styles.module.css';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={logoImg} alt="app logo" priority />
          Foodies
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink linkPath={'/meals'}>Brows Meals</NavLink>
            </li>
            <li>
              <NavLink linkPath={'/community'}>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
