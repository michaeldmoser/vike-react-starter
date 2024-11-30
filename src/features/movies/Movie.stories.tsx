import type { Meta, StoryObj } from '@storybook/react';

import { Movie } from './Movie';

const meta: Meta<typeof Movie> = {
  component: Movie,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'Return of the Jedi',
    director: 'Richard Marquand',
    release_date: '1983-05-25',
    producer: 'Howard G. Kazanjian, George Lucas, Rick McCallum',
  },
};
