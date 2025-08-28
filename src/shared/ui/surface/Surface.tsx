import { createElement, JSX } from 'react';
import styles from './Surface.module.scss';
import clsx from 'clsx';

export type SurfaceProps<T extends keyof JSX.IntrinsicElements = 'div'> = {
  children: React.ReactNode;
  tag?: T; // Ограничение по ключам JSX.IntrinsicElements
} & JSX.IntrinsicElements[T]; // Атрибуты соответствующего элемента

export default function Surface({
  tag = 'div',
  className,
  children,
  ...props
}: SurfaceProps) {
  return createElement(
    tag,
    {
      ...props,
      className: clsx(styles.Surface, className),
    },
    children
  );
}
