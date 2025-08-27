import clsx from 'clsx';
import { ButtonOrLink, ButtonOrLinkProps } from './ButtonOrLink';
import { Icon, IconName } from 'shared/ui/Icon';

import styles from './IconButton.module.scss';

type IconButtonProps = ButtonOrLinkProps & {
  iconName: IconName;
};
export default function IconButton({
  className,
  iconName,
  children,
  ...props
}: IconButtonProps) {
  return (
    <ButtonOrLink {...props} className={clsx(styles.button, className)}>
      <Icon className={styles.icon} name={iconName} />
      {children && <span className={styles.label}>{children}</span>}
    </ButtonOrLink>
  );
}
