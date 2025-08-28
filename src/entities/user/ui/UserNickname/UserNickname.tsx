import clsx from 'clsx';
import styles from './UserNickname.module.scss';

type UserNicknameProps = {
  className?: string;
};
export default function UserNickname({ className }: UserNicknameProps) {
  const nickname = '@nickname';
  const timeAgo = 'Вчера 18.00';
  return (
    <p className={clsx(styles.UserNickname, className)}>
      <span className={styles.nickname}>{nickname}</span>
      <span className={styles.timeAgo}>{timeAgo}</span>
    </p>
  );
}
