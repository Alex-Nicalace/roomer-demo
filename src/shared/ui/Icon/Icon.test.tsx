import { render, screen } from '@testing-library/react';
import { Icon } from 'shared/ui/Icon';
import styles from './Icon.module.scss';

describe('Icon', () => {
  test('renders SVG', () => {
    const { container } = render(<Icon name="avatar" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  test('applies className when provided', () => {
    const className = 'class-test';
    const { container } = render(<Icon name="avatar" className={className} />);
    expect(container.querySelector('svg')).toHaveClass(className);
  });

  test('applies default color class when no color provided', () => {
    const colorDefault = 'regular';
    const { container } = render(<Icon name="avatar" />);
    expect(container.querySelector('svg')).toHaveClass(
      styles[`${colorDefault}Color`]
    );
  });

  test('applies specific color class', () => {
    const color = 'active';
    const { container } = render(<Icon name="avatar" color={color} />);
    expect(container.querySelector('svg')).toHaveClass(styles[`${color}Color`]);
  });

  test('passes through SVG props', () => {
    const { container } = render(
      <Icon name="avatar" width="24" height="24" data-test="custom" />
    );
    const svg = container.querySelector('svg');

    expect(svg).toHaveAttribute('width', '24');
    expect(svg).toHaveAttribute('height', '24');
    expect(svg).toHaveAttribute('data-test', 'custom');
  });

  test('throws an error if the icon name is invalid', () => {
    // @ts-ignore - специально передаем невалидное значение
    expect(() => render(<Icon name="invalid-icon" />)).toThrow();
  });
});
