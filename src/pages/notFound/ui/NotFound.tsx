import Link from 'next/link';
import styles from './NotFound.module.scss';

export default function NotFound() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.description}>
        К сожалению, запрашиваемая вами страница не существует
      </p>
      <Link href="/" className={styles.link}>
        Вернуться на главную
      </Link>
    </main>
  );
}
