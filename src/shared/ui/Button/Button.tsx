import clsx from 'clsx';
import { ButtonOrLink, ButtonOrLinkProps } from './ButtonOrLink';

import styles from './Button.module.scss';

export enum ButtonTheme {
  OUTLINE = 'outline',
  BACKGROUND = 'background',
}

type ButtonProps = ButtonOrLinkProps & {
  theme?: ButtonTheme;
};

export default function Button({
  className,
  theme = ButtonTheme.BACKGROUND,
  ...props
}: ButtonProps) {
  return (
    <ButtonOrLink
      {...props}
      className={clsx(styles.button, className, styles[theme])}
    />
  );
}
