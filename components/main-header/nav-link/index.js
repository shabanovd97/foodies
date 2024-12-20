'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './styles.module.css';

export default function NavLink({ linkPath, children }) {
  const path = usePathname();

  return (
    <Link
      className={path.startsWith(linkPath) ? `${styles.link} ${styles.active}` : styles.link}
      href={linkPath}
    >
      {children}
    </Link>
  );
}
