import AvatarIcon from 'shared/assets/icons/avatar.svg';
import BellIcon from 'shared/assets/icons/bell.svg';
import FavouritesIcon from 'shared/assets/icons/favourites.svg';
import GlobeIcon from 'shared/assets/icons/globe.svg';
import MessageIcon from 'shared/assets/icons/message.svg';

export const iconMap = {
  avatar: AvatarIcon,
  bell: BellIcon,
  favourites: FavouritesIcon,
  globe: GlobeIcon,
  message: MessageIcon,
};

export type IconName = keyof typeof iconMap;
