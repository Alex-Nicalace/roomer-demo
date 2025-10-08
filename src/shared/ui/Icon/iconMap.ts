import AvatarIcon from 'shared/assets/icons/avatar.svg';
import BellIcon from 'shared/assets/icons/bell.svg';
import FavouritesIcon from 'shared/assets/icons/favourites.svg';
import GlobeIcon from 'shared/assets/icons/globe.svg';
import MessageIcon from 'shared/assets/icons/message.svg';
import CatIcon from 'shared/assets/icons/cat.svg';
import ShareIcon from 'shared/assets/icons/share.svg';
import EyeIcon from 'shared/assets/icons/eye.svg';
import GearIcon from 'shared/assets/icons/gear.svg';
import DownArrowIcon from 'shared/assets/icons/down-arrow.svg';
import LeftArrowIcon from 'shared/assets/icons/left-arrow.svg';
import BookmarksIcon from 'shared/assets/icons/bookmarks.svg';
import CheckMarkIcon from 'shared/assets/icons/check-mark.svg';
import CloseIcon from 'shared/assets/icons/close.svg';
import EyelashesIcon from 'shared/assets/icons/eyelashes.svg';
import HistoryIcon from 'shared/assets/icons/history.svg';
import LinesIcon from 'shared/assets/icons/lines.svg';
import LogoutIcon from 'shared/assets/icons/logout.svg';

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
  downArrow: DownArrowIcon,
  bookmarks: BookmarksIcon,
  checkMark: CheckMarkIcon,
  close: CloseIcon,
  eyelashes: EyelashesIcon,
  history: HistoryIcon,
  lines: LinesIcon,
  logout: LogoutIcon,
};

export type IconName = keyof typeof iconMap;
