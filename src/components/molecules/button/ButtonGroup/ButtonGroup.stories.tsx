import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { Button } from '../../../atoms/button/Button/Button';
import { ButtonGroup as ButtonGroupComponent } from './ButtonGroup';
import { ButtonGroupProps } from './interfaces/ButtonGroupProps';

export default {
  title: 'Molecules/Button/ButtonGroup',
  component: ButtonGroupComponent,
  argTypes: {},
} as Meta;

const ButtonGroupTemplate: Story<ButtonGroupProps> = (
  args: ButtonGroupProps,
): ReactElement => {
  return (
    <ButtonGroupComponent {...args}>
      <Button label="Button one"></Button>
      <Button label="Button two"></Button>
      <Button label="Button three"></Button>
    </ButtonGroupComponent>
  );
};

export const ButtonGroup = ButtonGroupTemplate.bind({});

ButtonGroup.args = {
  color: 'primary',
  size: 'medium',
  variant: 'outlined',
};
