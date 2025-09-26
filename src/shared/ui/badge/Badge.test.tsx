import { render, screen } from '@testing-library/react';
import { Badge } from 'shared/ui/badge';
import styles from './Badge.module.scss';

describe('Badge', () => {
  test('renders badge with value', () => {
    const value = 5;
    render(<Badge value={value} />);
    expect(screen.getByText(value.toString())).toBeInTheDocument();
  });

  test('applies default className', () => {
    const value = 9;
    render(<Badge value={value} />);
    expect(screen.getByText(value)).toHaveClass(styles.Badge);
  });

  test('applies className when provided', () => {
    const className = 'class-test';
    const value = 9;
    render(<Badge className={className} value={value} />);
    expect(screen.getByText(value)).toHaveClass(className);
  });

  test('has accessible name', () => {
    const value = 9;
    render(<Badge value={value} />);
    expect(screen.getByText(value)).toHaveAccessibleName(
      `Количество: ${value}`
    );
  });
});
