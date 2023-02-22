import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import ImageComponent from './Image';
import { ImageProps } from '@/interfaces';

export default {
  title: 'Basic Components/Atoms/Images/Image',
  component: ImageComponent,
  argTypes: {},
} as Meta;

const ImageTemplate: Story<ImageProps> = (args: ImageProps): ReactElement => (
  <ImageComponent {...args} />
);

export const Image = ImageTemplate.bind({});

Image.args = {
  imageUrl: undefined,
  imageAlt: 'Alternativtext für Accessability',
  imageWidth: '100%',
  imageHeight: 'auto',
};
