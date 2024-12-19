import Link from 'next/link';
import Image from 'next/image';

import MainHeaderBackground from '@/components/main-header-background';

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
              <Link href="/meals">Brows Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
