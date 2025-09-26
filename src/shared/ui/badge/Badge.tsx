import clsx from 'clsx';
import styles from './Badge.module.scss';

type BadgeProps = {
  value: number;
  className?: string;
};
export default function Badge({ className, value }: BadgeProps) {
  return (
    <div
      className={clsx(styles.Badge, className)}
      aria-label={`Количество: ${value}`}
    >
      {value}
    </div>
  );
}
