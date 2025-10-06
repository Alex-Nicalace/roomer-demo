import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { AccordionSummary } from 'shared/ui/accordion-summary';

const meta = {
  title: 'shared/ui/AccordionSummary',
  component: AccordionSummary,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    label: 'Детали',
    count: 3,
  },
} satisfies Meta<typeof AccordionSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    bulletColor: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    bulletColor: 'secondary',
  },
};

export const RenderInsideBlock: Story = {
  render: (args) => (
    <div style={{ width: '294px' }}>
      <AccordionSummary {...args} />
    </div>
  ),
  args: {
    bulletColor: 'secondary',
  },
};
