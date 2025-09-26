import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Bullet } from 'shared/ui/bullet';

const meta = {
  title: 'shared/ui/Bullet',
  component: Bullet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Bullet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
