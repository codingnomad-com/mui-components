import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { Avatar as AvatarComponent } from './Avatar';
import { AvatarProps } from './interfaces/AvatarProps';

export default {
  title: 'Atoms/Image/Avatar',
  component: AvatarComponent,
  argTypes: {},
} as Meta;

const AvatarTemplate: Story<AvatarProps> = (
  args: AvatarProps,
): ReactElement => {
  return <AvatarComponent {...args} />;
};

export const Avatar = AvatarTemplate.bind({});

Avatar.args = {
  alt: 'I am an image alt',
  variant: 'square',
};
