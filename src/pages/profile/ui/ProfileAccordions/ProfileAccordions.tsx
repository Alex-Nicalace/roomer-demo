import clsx from 'clsx';
import styles from './ProfileAccordions.module.scss';
import { Surface } from 'shared/ui/surface';
import { CallsAccordion } from 'entities/calls';
import { GoingsAccordion } from 'entities/goings';

type ProfileAccordionsProps = {
  className?: string;
};
export default function ProfileAccordions({
  className,
}: ProfileAccordionsProps) {
  return (
    <Surface className={clsx(styles.ProfileAccordions, className)}>
      <CallsAccordion />
      <GoingsAccordion />
    </Surface>
  );
}
