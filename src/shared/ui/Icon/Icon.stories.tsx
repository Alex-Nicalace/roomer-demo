import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Icon } from 'shared/ui/Icon';

const meta = {
  title: 'shared/ui/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'avatar',
  },
};
