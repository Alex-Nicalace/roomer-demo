import { Button, ButtonTheme } from 'shared/ui/button';

import styles from './NotFound.module.scss';

export default function NotFound() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.description}>
        К сожалению, запрашиваемая вами страница не существует
      </p>
      <Button href="/" theme={ButtonTheme.OUTLINE}>
        Вернуться на главную
      </Button>
    </main>
  );
}
