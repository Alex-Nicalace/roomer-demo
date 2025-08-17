import clsx from 'clsx';

import { FooterNav } from './FooterNav';

import styles from './Footer.module.scss';

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={clsx(styles.footer, className)}>
      <FooterNav />
    </footer>
  );
}
