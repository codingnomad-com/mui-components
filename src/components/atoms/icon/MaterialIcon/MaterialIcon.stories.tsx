import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { MaterialIconProps } from './interfaces/MaterialIconProps';
import { MaterialIcon as MaterialIconComponent } from './MaterialIcon';

export default {
  title: 'Atoms/Icon/MaterialIcon',
  component: MaterialIconComponent,
  argTypes: {},
} as Meta;

const MaterialIconTemplate: Story<MaterialIconProps> = (
  args: MaterialIconProps,
): ReactElement => {
  return <MaterialIconComponent {...args}></MaterialIconComponent>;
};

export const MaterialIcon = MaterialIconTemplate.bind({});

MaterialIcon.args = {
  iconName: 'Abc',
};
