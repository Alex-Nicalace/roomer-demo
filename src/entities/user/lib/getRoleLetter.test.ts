import { getRoleLetter } from 'entities/user/lib';

describe('getRoleLetter', () => {
  test.each([
    ['roomer', 'Р'],
    ['ROOMER', 'Р'],
    ['Roomer', 'Р'],
    ['ro', '?'],
    ['unknown', '?'],
  ])('для роли "%s" возвращает %s', (role, expected) => {
    expect(getRoleLetter(role)).toBe(expected);
  });
});
