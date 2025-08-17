import clsx from 'clsx';

import { FOOTER_NAV_LINKS } from '../config';
import { FooterNavItem } from './FooterNavItem';

import styles from './FooterNav.module.scss';

type FooterNavProps = {
  className?: string;
};
export function FooterNav({ className }: FooterNavProps) {
  return (
    <nav className={clsx(styles.nav, className)}>
      <ul className={styles.list}>
        {FOOTER_NAV_LINKS.map((item) => (
          <FooterNavItem key={item.href} {...item} className={styles.item} />
        ))}
      </ul>
    </nav>
  );
}
