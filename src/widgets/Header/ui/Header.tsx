import React from 'react';
import clsx from 'clsx';

import { BurgerButton } from 'features/BurgerButton';

import styles from './Header.module.scss';

type HeaderProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function Header({ children, className }: HeaderProps) {
  return (
    <header className={clsx(styles.header, className)}>
      <div className={styles.content}>{children}</div>
      <BurgerButton className={styles.burger} />
    </header>
  );
}
