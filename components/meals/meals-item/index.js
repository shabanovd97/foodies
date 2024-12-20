import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.css';

export default function MealItem({ title, id, image, summary, creator }) {
  return (
    <article className={styles.meal}>
      <header>
        <div className={styles.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={styles.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={styles.content}>
        <p className={styles.summary}>{summary}</p>
        <div className={styles.actions}>
          <Link href={`/meals/${id}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
