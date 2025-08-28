import clsx from 'clsx';

import styles from './UserName.module.scss';

type UserNameProps = {
  className?: string;
};
export default function UserName({ className }: UserNameProps) {
  //todo: replace with real data
  const role = 'румер';
  const fullName = 'Ваня Петькин';
  return (
    <p className={clsx(styles.userName, className)}>
      <span className={styles.role}>{`${role}: `}</span>
      <span className={styles.fullName}>{fullName}</span>
    </p>
  );
}
