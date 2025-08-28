import clsx from 'clsx';
import styles from './UserItemStats.module.scss';

type UserItemStatsProps = {
  className?: string;
  topString: string;
  bottomString: string;
};
export default function UserItemStats({
  className,
  topString,
  bottomString,
}: UserItemStatsProps) {
  return (
    <span className={clsx(styles.UserItemStats, className)}>
      <span className={styles.topString}>{topString}</span>
      <span className={styles.bottomString}>{bottomString}</span>
    </span>
  );
}
