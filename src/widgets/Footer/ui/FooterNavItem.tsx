'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icon, IconName } from 'shared/ui/Icon';

import styles from './FooterNavItem.module.scss';

type FooterNavItemProps = {
  className?: string;
  href: string;
  iconName: IconName;
};
export function FooterNavItem({
  href,
  iconName,
  className,
}: FooterNavItemProps) {
  const pathname = usePathname();
  const iconColor = pathname === href ? 'active' : 'regular';

  return (
    <li className={clsx(styles.item, className)}>
      <Link href={href}>
        <Icon name={iconName} color={iconColor} />
      </Link>
    </li>
  );
}
