import clsx from 'clsx';
import { createElement, JSX } from 'react';
import styles from './Surface.module.scss';

type Tags = keyof JSX.IntrinsicElements;
type SurfaceTheme = 'list';

export type SurfaceProps<T extends Tags = 'div'> = {
  tag?: T;
  theme?: SurfaceTheme;
} & JSX.IntrinsicElements[T];

export default function Surface<T extends Tags = 'div'>({
  tag,
  className,
  children,
  theme,
  ...props
}: SurfaceProps<T>) {
  const tagName = tag ?? 'div';
  return createElement(
    tagName,
    {
      ...props,
      className: clsx(styles.Surface, theme && styles[theme], className),
    },
    children
  );
}
