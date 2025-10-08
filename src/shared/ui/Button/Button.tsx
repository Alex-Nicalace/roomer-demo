import clsx from 'clsx';

import { Icon, IconName } from 'shared/ui/Icon';
import { Bullet } from 'shared/ui/bullet';

import styles from './Button.module.scss';
import { ButtonOrLink, ButtonOrLinkProps } from './ButtonOrLink';

export enum ButtonTheme {
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  CLEAR = 'clear',
}

export type ButtonIcon = IconName | 'bullet';

type ButtonProps = ButtonOrLinkProps & {
  theme?: ButtonTheme;
  withIcon?: ButtonIcon;
  fullWidth?: boolean;
};

export default function Button({
  className,
  withIcon,
  children,
  theme = ButtonTheme.BACKGROUND,
  fullWidth,
  ...props
}: ButtonProps) {
  return (
    <ButtonOrLink
      {...props}
      className={clsx(styles.button, className, styles[theme], {
        [styles.fullWidth]: fullWidth,
      })}
    >
      {withIcon && withIcon !== 'bullet' && (
        <span className={styles.icon}>
          <Icon name={withIcon} />
        </span>
      )}
      {withIcon === 'bullet' && (
        <Bullet className={styles.bullet} isSmall color="tertiary" />
      )}
      {children}
    </ButtonOrLink>
  );
}
