import { Avatar } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { Badge as BadgeComponent } from './Badge';
import { BadgeProps } from './interfaces/BadgeProps';

export default {
  title: 'Atoms/Information/Badge',
  component: BadgeComponent,
  argTypes: {},
} as Meta;

const BadgeTemplate: Story<BadgeProps> = (args: BadgeProps): ReactElement => {
  return (
    <BadgeComponent {...args}>
      <Avatar></Avatar>
    </BadgeComponent>
  );
};

export const Badge = BadgeTemplate.bind({});

Badge.args = {
  color: 'primary',
  badgeContent: 4,
  anchorOrigin: { vertical: 'top', horizontal: 'right' },
};
