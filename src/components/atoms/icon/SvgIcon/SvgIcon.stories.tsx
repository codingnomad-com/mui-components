import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { SvgIconProps } from './interfaces/SvgIconProps';
import { SvgIcon as SvgIconComponent } from './SvgIcon';

export default {
  title: 'Atoms/Icon/SvgIcon',
  component: SvgIconComponent,
  argTypes: {},
} as Meta;

const SvgIconTemplate: Story<SvgIconProps> = (
  args: SvgIconProps,
): ReactElement => {
  return (
    <SvgIconComponent {...args}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIconComponent>
  );
};

export const SvgIcon = SvgIconTemplate.bind({});

SvgIcon.args = {
  color: 'primary',
  fontSize: 'medium',
};
