import clsx from 'clsx';

import { Icon, IconName } from 'shared/ui/Icon';
import { ButtonOrLink, ButtonOrLinkProps } from './ButtonOrLink';

import styles from './Button.module.scss';

export enum ButtonTheme {
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  ICON_OUTLINE = 'iconOutline',
}

type ButtonProps = ButtonOrLinkProps & {
  theme?: ButtonTheme;
  withIcon?: IconName;
};

export default function Button({
  className,
  withIcon,
  children,
  theme = ButtonTheme.BACKGROUND,
  ...props
}: ButtonProps) {
  return (
    <ButtonOrLink
      {...props}
      className={clsx(styles.button, className, styles[theme])}
    >
      {withIcon && <Icon name={withIcon} className={styles.icon} />}
      {children}
    </ButtonOrLink>
  );
}
