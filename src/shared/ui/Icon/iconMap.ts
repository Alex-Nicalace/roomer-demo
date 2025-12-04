import AvatarIcon from 'shared/assets/icons/avatar.svg';
import BellIcon from 'shared/assets/icons/bell.svg';
import BookmarksIcon from 'shared/assets/icons/bookmarks.svg';
import CatIcon from 'shared/assets/icons/cat.svg';
import CheckMarkIcon from 'shared/assets/icons/check-mark.svg';
import CloseIcon from 'shared/assets/icons/close.svg';
import DownArrowIcon from 'shared/assets/icons/down-arrow.svg';
import EyeIcon from 'shared/assets/icons/eye.svg';
import EyelashesIcon from 'shared/assets/icons/eyelashes.svg';
import FavouritesIcon from 'shared/assets/icons/favourites.svg';
import GearIcon from 'shared/assets/icons/gear.svg';
import GlobeIcon from 'shared/assets/icons/globe.svg';
import HistoryIcon from 'shared/assets/icons/history.svg';
import LeftArrowIcon from 'shared/assets/icons/left-arrow.svg';
import LinesIcon from 'shared/assets/icons/lines.svg';
import LogoutIcon from 'shared/assets/icons/logout.svg';
import MessageIcon from 'shared/assets/icons/message.svg';
import RightArrowIcon from 'shared/assets/icons/right-arrow.svg';
import ShareIcon from 'shared/assets/icons/share.svg';

export const iconMap = {
  avatar: AvatarIcon,
  bell: BellIcon,
  bookmarks: BookmarksIcon,
  cat: CatIcon,
  checkMark: CheckMarkIcon,
  close: CloseIcon,
  downArrow: DownArrowIcon,
  eye: EyeIcon,
  eyelashes: EyelashesIcon,
  favourites: FavouritesIcon,
  gear: GearIcon,
  globe: GlobeIcon,
  history: HistoryIcon,
  leftArrow: LeftArrowIcon,
  lines: LinesIcon,
  logout: LogoutIcon,
  message: MessageIcon,
  rightArrow: RightArrowIcon,
  share: ShareIcon,
};

export type IconName = keyof typeof iconMap;
