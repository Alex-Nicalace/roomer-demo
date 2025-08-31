/**
 *
 * @param role - роль пользователя
 * @returns — первая буква роли или '?' если роль неизвестна
 */
export function getRoleLetter(role: string) {
  const roleMap: Record<string, string> = {
    roomer: 'Р',
  };

  return roleMap[role.toLowerCase()] || '?';
}
