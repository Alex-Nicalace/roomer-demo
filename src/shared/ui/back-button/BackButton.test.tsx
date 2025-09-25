import { render, screen, fireEvent } from '@testing-library/react';
import { BackButton } from 'shared/ui/back-button';

const mockRouter = { back: vi.fn() };

vi.mock('next/navigation', () => ({
  useRouter: () => mockRouter,
}));

describe('BackButton', () => {
  test('renders button with icon', () => {
    const { container } = render(<BackButton />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  test('applies className when provided', () => {
    const className = 'class-test';
    render(<BackButton className={className} />);
    expect(screen.getByRole('button')).toHaveClass(className);
  });

  test('calls router.back() on click', () => {
    render(<BackButton />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockRouter.back).toHaveBeenCalled();
  });

  test('has accessible name "Go back"', () => {
    render(<BackButton />);
    const button = screen.getByRole('button');
    expect(button).toHaveAccessibleName('Go back');
  });
});
