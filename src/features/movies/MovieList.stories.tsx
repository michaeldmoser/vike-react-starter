import type { Meta, StoryObj } from '@storybook/react';

import { MovieList } from './MovieList';

const meta: Meta<typeof MovieList> = {
  component: MovieList,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    movies: [
      {
        id: '2',
        title: 'Return of the Jedi',
        release_date: '1983-05-25',
      },
      {
        id: '1',
        title: 'A New Hope',
        release_date: '1977-05-25',
      },
    ],
  },
};
