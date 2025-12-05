import { ReadMoreText } from 'shared/ui/read-more-text';
import { Surface } from 'shared/ui/surface';
import styles from './UserAbout.module.scss';

// type UserAboutProps = { }
export default function UserAbout(/*{ }: UserAboutProps*/) {
  //TODO: Сделать получение из хранилища
  const about = `Далеко-далеко за словесными горами в стране гласных и согласных живут
        рыбные тексты. Прямо которое рекламных собрал бросил переписали
        осталось, пор заманивший диких залетают послушавшись вопроса напоивший
        он там? Приставка коварный курсивных напоивший. Далеко-далеко за
        словесными горами в стране гласных и согласных живут рыбные тексты.
        Прямо которое рекламных собрал бросил переписали осталось, пор
        заманивший диких залетают послушавшись вопроса напоивший он там?
        Приставка коварный курсивных напоивший.`;
  const telega = 'ribakit3';

  return (
    <Surface className={styles.UserAbout}>
      <ReadMoreText className={styles.readMore} lines={4} durationAnimate={300}>
        {about}
      </ReadMoreText>
      <address className={styles.telega}>
        <span>Мой телеграм</span>
        <a
          className={styles.linkTelega}
          href={`https://t.me/${telega}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Перейти на Telegram"
        >
          {telega}
        </a>
      </address>
    </Surface>
  );
}
