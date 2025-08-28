import UserItemStats from './UserItemStats';

import styles from './UserStats.module.scss';

// type UserStatsProps = { }
export default function UserStats(/*{ }: UserStatsProps*/) {
  //todo: replace with real data

  return (
    <p className={styles.UserStats}>
      <UserItemStats topString="1 месяц" bottomString="в игруме" />
      <UserItemStats topString="15" bottomString="встреч" />
      <UserItemStats topString="350" bottomString="румеров" />
    </p>
  );
}
