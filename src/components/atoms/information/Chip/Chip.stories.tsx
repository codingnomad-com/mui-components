import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { Avatar } from './../../image/Avatar/Avatar';
import { Chip as ChipComponent } from './Chip';
import { ChipProps } from './interfaces/ChipProps';

export default {
  title: 'Atoms/Information/Chip',
  component: ChipComponent,
  argTypes: {},
} as Meta;

const ChipTemplate: Story<ChipProps> = (args: ChipProps): ReactElement => {
  return <ChipComponent {...args} />;
};

export const Chip = ChipTemplate.bind({});

Chip.args = {
  avatar: <Avatar></Avatar>,
  color: 'primary',
  size: 'medium',
  variant: 'outlined',
};
