import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Badge } from 'shared/ui/badge';

const meta = {
  title: 'shared/ui/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    value: 9,
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
