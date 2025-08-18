import clsx from 'clsx';

import { FooterNav } from './FooterNav';

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={clsx(className)}>
      <FooterNav />
    </footer>
  );
}
