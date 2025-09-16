import { render } from '@testing-library/react';
import { Surface } from 'shared/ui/surface';

describe('Surface', () => {
  test('renders default tag when none is provided', () => {
    const defaultNameTag = 'div';
    const childrenText = 'test-text';
    const { container, getByText } = render(<Surface>{childrenText}</Surface>);
    expect(container.querySelector(defaultNameTag)).toBeInTheDocument();
    expect(getByText(childrenText)).toBeInTheDocument();
  });

  test('renders tag when provided', () => {
    const nameTag = 'section';
    const { container } = render(<Surface tag={nameTag} />);
    expect(container.querySelector(nameTag)).toBeInTheDocument();
  });

  test('applies className when provided', () => {
    const className = 'class-test';
    const nameTag = 'section';
    const { container } = render(
      <Surface tag={nameTag} className={className} />
    );
    expect(container.querySelector(nameTag)).toHaveClass(className);
  });

  test('passes through аttributes', () => {
    const nameTag = 'section';
    const { container } = render(
      <Surface tag={nameTag} data-test="someValue" id="test" />
    );
    const element = container.querySelector(nameTag);

    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute('data-test', 'someValue');
    expect(element).toHaveAttribute('id', 'test');
  });
});
