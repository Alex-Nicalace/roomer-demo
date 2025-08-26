import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from 'react';

import styles from './Button.module.scss';

export enum ButtonTheme {
  OUTLINE = 'outline',
  BACKGROUND = 'background',
}

type NativeButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  href?: never;
};

type AnchorProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

type ButtonProps = (AnchorProps | NativeButtonProps) & {
  theme?: ButtonTheme;
};
export function Button({
  className,
  theme = ButtonTheme.BACKGROUND,
  ...props
}: ButtonProps) {
  const classes = clsx(styles.button, className, styles[theme]);

  if (props.href !== undefined) {
    return <Link {...props} className={classes} />;
  }

  return <button {...props} className={classes} />;
}
