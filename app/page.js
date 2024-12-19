'use client';

import Link from 'next/link';

import ImageSlideshow from '@components/images';

import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={styles.hero}>
            <h1>NextLevel food</h1>
            <p>Taste & share food from all over the world</p>
          </div>
          <div className={styles.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.section}>
          <h2>How it works</h2>
          <p>
            Foodies is a platform for foodies to share their favorite recipes
            with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            Foodies is a place to discover new dishes, and to connect with other
            food lovers.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Why Foodies?</h2>
          <p>
            Foodies is a platform for foodies to share their favorite recipes
            with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            Foodies is a place to discover new dishes, and to connect with other
            food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
