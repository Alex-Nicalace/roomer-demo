import { render, screen, fireEvent } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/button';
import styles from './Button.module.scss';

describe('Button', () => {
  test('renders button with label', () => {
    const buttonText = 'Click me';
    render(<Button>{buttonText}</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  test('applies className when provided', () => {
    const className = 'class-test';
    render(<Button className={className} />);
    expect(screen.getByRole('button')).toHaveClass(className);
  });

  test('applies default theme when none is provided', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toHaveClass(
      styles[ButtonTheme.BACKGROUND]
    );
  });

  test('applies provided theme', () => {
    const theme = ButtonTheme.OUTLINE;
    render(<Button theme={theme} />);
    expect(screen.getByRole('button')).toHaveClass(styles[theme]);
  });

  test('renders button when provided prop withIcon', () => {
    render(<Button withIcon="gear" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByTestId('mocked-svg')).toBeInTheDocument();
  });

  test('renders button when provided prop withIcon and label', () => {
    const buttonText = 'Click me';
    render(<Button withIcon="gear">{buttonText}</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByTestId('mocked-svg')).toBeInTheDocument();
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  test('click event is fired', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  test('click event is disabled', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick} disabled />);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  test('has accessible name when label is provided', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveAccessibleName('Click me');
  });

  test('has accessible name when only withIcon is provided', () => {
    render(<Button withIcon="gear" aria-label="Settings" />);
    expect(screen.getByRole('button')).toHaveAccessibleName('Settings');
  });

  test('renders link with label', () => {
    const buttonText = 'Click me';
    const href = '/test';
    render(<Button href={href}>{buttonText}</Button>);
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });
});
