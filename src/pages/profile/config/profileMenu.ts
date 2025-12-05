import { ButtonIcon } from 'shared/ui/button';

type ProfileMenuItem = {
  id: string;
  label: string;
  iconName: ButtonIcon;
} & (
  | {
      kind: 'link';
      href: string;
      onClick?: never;
    }
  | {
      kind: 'button';
    }
);

export const profileMenu: readonly ProfileMenuItem[][] = [
  [
    {
      id: 'history',
      kind: 'link',
      href: '/history-meetings',
      label: 'ИСТОРИЯ ВСТРЕЧ',
      iconName: 'history',
    },
  ],
  [
    {
      id: 'private',
      kind: 'button',
      label: 'Публичный аккаун',
      iconName: 'eyelashes',
    },
    {
      id: 'age',
      kind: 'button',
      label: 'Взрослый',
      iconName: 'lines',
    },
  ],
  [
    {
      id: 'subscriptions',
      kind: 'button',
      label: 'Мои подписки',
      iconName: 'checkMark',
    },
    {
      id: 'blacklist',
      kind: 'button',
      label: 'Черный список',
      iconName: 'close',
    },
    {
      id: 'bookmarks',
      kind: 'button',
      label: 'Закладки',
      iconName: 'bookmarks',
    },
  ],
  [
    {
      id: 'opportunities',
      kind: 'link',
      href: '/opportunities',
      label: 'Возможноcти ИГРУМА',
      iconName: 'bullet',
    },
    {
      id: 'rules',
      kind: 'link',
      href: '/rules',
      label: 'Правила ИГРУМА',
      iconName: 'bullet',
    },
    {
      id: 'instruction-roomer',
      kind: 'link',
      href: '/instruction-roomer',
      label: 'Инструкция РУМЕРА',
      iconName: 'bullet',
    },
    {
      id: 'instruction-master',
      kind: 'link',
      href: '/instruction-master',
      label: 'Инструкция МАСТЕРА',
      iconName: 'bullet',
    },
    {
      id: 'instruction-place',
      kind: 'link',
      href: '/instruction-place',
      label: 'Инструкция МЕСТА',
      iconName: 'bullet',
    },
    {
      id: 'user-agreement',
      kind: 'link',
      href: '/user-agreement',
      label: 'Пользовательское соглашение',
      iconName: 'bullet',
    },
  ],
  [
    {
      id: 'logout',
      kind: 'button',
      label: 'Выйти из профиля',
      iconName: 'logout',
    },
  ],
];
