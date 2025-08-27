import AvatarIcon from 'shared/assets/icons/avatar.svg';
import BellIcon from 'shared/assets/icons/bell.svg';
import FavouritesIcon from 'shared/assets/icons/favourites.svg';
import GlobeIcon from 'shared/assets/icons/globe.svg';
import MessageIcon from 'shared/assets/icons/message.svg';
import CatIcon from 'shared/assets/icons/cat.svg';
import ShareIcon from 'shared/assets/icons/share.svg';
import EyeIcon from 'shared/assets/icons/eye.svg';
import GearIcon from 'shared/assets/icons/gear.svg';
import LeftArrowIcon from 'shared/assets/icons/left-arrow.svg';

export const iconMap = {
  avatar: AvatarIcon,
  bell: BellIcon,
  favourites: FavouritesIcon,
  globe: GlobeIcon,
  message: MessageIcon,
  cat: CatIcon,
  share: ShareIcon,
  eye: EyeIcon,
  gear: GearIcon,
  leftArrow: LeftArrowIcon,
};

export type IconName = keyof typeof iconMap;
