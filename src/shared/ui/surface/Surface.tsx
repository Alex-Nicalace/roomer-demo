import { createElement, JSX } from 'react';
import styles from './Surface.module.scss';
import clsx from 'clsx';

type Tags = keyof JSX.IntrinsicElements;

export type SurfaceProps<T extends Tags = 'div'> = {
  tag?: T;
} & JSX.IntrinsicElements[T];

export default function Surface<T extends Tags = 'div'>({
  tag,
  className,
  children,
  ...props
}: SurfaceProps<T>) {
  const tagName = tag ?? 'div';
  return createElement(
    tagName,
    {
      ...props,
      className: clsx(styles.Surface, className),
    },
    children
  );
}
