import { IconName } from 'shared/ui/Icon';

export const FOOTER_NAV_LINKS: { href: string; iconName: IconName }[] = [
  { href: '/favourites', iconName: 'favourites' },
  { href: '/message', iconName: 'message' },
  { href: '/', iconName: 'globe' },
  { href: '/bell', iconName: 'bell' },
  { href: '/profile', iconName: 'avatar' },
] as const;
