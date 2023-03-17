import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import Icon from '@mui/material/Icon/Icon';
import { ToggleButtonProps } from './interfaces/ToggleButtonProps';
import { ToggleButton as ToggleButtonComponent } from './ToggleButton';

export default {
  title: 'Molecules/Button/ToggleButton',
  component: ToggleButtonComponent,
  argTypes: {},
} as Meta;

const ToggleButtonTemplate: Story<ToggleButtonProps> = (
  args: ToggleButtonProps,
): ReactElement => {
  return (
    <ToggleButtonComponent {...args}>
      <Icon>star</Icon>
    </ToggleButtonComponent>
  );
};

export const ToggleButton = ToggleButtonTemplate.bind({});

ToggleButton.args = {
  color: 'primary',
  size: 'medium',
};
