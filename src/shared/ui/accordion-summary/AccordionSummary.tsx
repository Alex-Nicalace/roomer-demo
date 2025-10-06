import clsx from 'clsx';
import { Badge } from 'shared/ui/badge';
import { Bullet, BulletColor } from 'shared/ui/bullet';
import styles from './AccordionSummary.module.scss';

type AccordionSummaryProps = {
  className?: string;
  label: string;
  bulletColor: BulletColor;
  count: number;
};
export default function AccordionSummary({
  className,
  label,
  bulletColor,
  count,
}: AccordionSummaryProps) {
  return (
    <span className={clsx(styles.AccordionSummary, className)}>
      <Bullet color={bulletColor} />
      <span className={styles.label}>{label}</span>
      <Badge value={count} />
    </span>
  );
}
