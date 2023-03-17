import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { IconButton as IconButtonComponent } from './IconButton';
import { IconButtonProps } from './interfaces/IconButtonProps';

export default {
  title: 'Molecules/Button/IconButton',
  component: IconButtonComponent,
  argTypes: {},
} as Meta;

const IconButtonTemplate: Story<IconButtonProps> = (
  args: IconButtonProps,
): ReactElement => {
  return (
    <IconButtonComponent {...args}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
    </IconButtonComponent>
  );
};

export const IconButton = IconButtonTemplate.bind({});

IconButton.args = {
  color: 'primary',
  size: 'medium',
  variant: 'outlined',
};
