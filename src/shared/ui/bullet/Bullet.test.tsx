import { render, screen } from '@testing-library/react';
import { Bullet } from 'shared/ui/bullet';

describe('Badge', () => {
  test('renders bullet default', () => {
    render(<Bullet />);
    const bullet = screen.getByTestId('bullet');
    expect(bullet).toBeInTheDocument();
    expect(bullet.className).toEqual(expect.stringContaining('Bullet'));
    expect(bullet.className).toEqual(expect.stringContaining('primary'));
    expect(bullet.className).not.toEqual(expect.stringContaining('small'));
  });

  test('renders bullet with small size', () => {
    render(<Bullet isSmall />);
    const bullet = screen.getByTestId('bullet');
    expect(bullet.className).toEqual(expect.stringContaining('small'));
  });

  test('renders bullet with secondary color', () => {
    render(<Bullet color="secondary" />);
    const bullet = screen.getByTestId('bullet');
    expect(bullet.className).toEqual(expect.stringContaining('secondary'));
  });

  test('renders bullet with tertiary color', () => {
    render(<Bullet color="tertiary" />);
    const bullet = screen.getByTestId('bullet');
    expect(bullet.className).toEqual(expect.stringContaining('tertiary'));
  });
});
