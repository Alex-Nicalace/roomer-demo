import { render, screen } from '@testing-library/react';
import { Icon } from 'shared/ui/Icon';
import styles from './Icon.module.scss';

describe('Icon', () => {
  test('renders SVG', () => {
    render(<Icon name="avatar" />);
    expect(screen.getByTestId('mocked-svg')).toBeInTheDocument();
  });

  test('applies className when provided', () => {
    const className = 'class-test';
    render(<Icon name="avatar" className={className} />);
    expect(screen.getByTestId('mocked-svg')).toHaveClass(className);
  });

  test('applies default color class when no color provided', () => {
    const colorDefault = 'regular';
    render(<Icon name="avatar" />);
    expect(screen.getByTestId('mocked-svg')).toHaveClass(
      styles[`${colorDefault}Color`]
    );
  });

  test('applies specific color class', () => {
    const color = 'active';
    render(<Icon name="avatar" color={color} />);
    expect(screen.getByTestId('mocked-svg')).toHaveClass(
      styles[`${color}Color`]
    );
  });

  test('passes through SVG props', () => {
    render(<Icon name="avatar" width="24" height="24" data-test="custom" />);
    const svg = screen.getByTestId('mocked-svg');

    expect(svg).toHaveAttribute('width', '24');
    expect(svg).toHaveAttribute('height', '24');
    expect(svg).toHaveAttribute('data-test', 'custom');
  });

  test('throws an error if the icon name is invalid', () => {
    // @ts-ignore - специально передаем невалидное значение
    expect(() => render(<Icon name="invalid-icon" />)).toThrow();
  });
});
