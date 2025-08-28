import Image from 'next/image';
import clsx from 'clsx';

import styles from './UserAvatar.module.scss';

// Функция для получения буквы по роли
function getRoleLetter(role: string) {
  const roleMap: Record<string, string> = {
    румер: 'Р',
  };

  return roleMap[role.toLowerCase()] || '?';
}

type UserAvatarProps = {
  className?: string;
  // imageUrl: string;
  // userRole: string;
  alt?: string;
};
export default function UserAvatar({
  className,
  // imageUrl,
  // userRole,
  alt = 'Аватар пользователя',
}: UserAvatarProps) {
  //TODO: Сделать получение из хранилища
  const userRole = 'румер'; // Пример роли пользователя
  const imageUrl = '/img/avatar.jpg'; // Пример URL изображения

  return (
    <figure className={clsx(styles.avatar, className)}>
      <Image
        className={styles.image}
        src={imageUrl}
        width={180}
        height={180}
        alt={alt}
      />
      <span
        className={styles.role}
        role="status"
        aria-label={`Роль: ${userRole}`}
        title={`Роль пользователя: ${userRole}`}
      >
        {getRoleLetter(userRole)}
      </span>
    </figure>
  );
}
