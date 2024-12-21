import { Suspense } from 'react';
import Link from 'next/link';

import MealsGrid from '@components/meals/meals-grid';
import MealsLoader from './loader';

import { getMeals } from '@lib/meals';

import styles from './page.module.css';

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{' '}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main>
        <Suspense fallback={<MealsLoader />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
