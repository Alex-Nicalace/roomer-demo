import clsx from 'clsx';
import styles from './Bullet.module.scss';

export type BulletColor = 'primary' | 'secondary' | 'tertiary';

type IndicatorProps = {
  className?: string;
  color?: BulletColor;
  isSmall?: boolean;
};
export default function Bullet({
  color = 'primary',
  className,
  isSmall = false,
}: IndicatorProps) {
  return (
    <span
      className={clsx(
        styles.Bullet,
        styles[color],
        { [styles.small]: isSmall },
        className
      )}
      data-testid="bullet"
    />
  );
}
