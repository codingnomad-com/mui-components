import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { Image as ImageComponent } from './Image';
import { ImageProps } from './interfaces/ImageProps';

export default {
  title: 'Atoms/Image/Image',
  component: ImageComponent,
  argTypes: {},
} as Meta;

const SvgIconTemplate: Story<ImageProps> = (args: ImageProps): ReactElement => {
  return <Image {...args} />;
};

export const Image = SvgIconTemplate.bind({});

Image.args = {
  src: '',
  alt: 'I am an Image',
};
