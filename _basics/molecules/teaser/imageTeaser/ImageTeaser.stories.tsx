/* eslint-disable no-console */

import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import ImageTeaserComponent from './ImageTeaser';
import { ImageTeaserProps } from '@/interfaces';

export default {
  title: 'Basic Components/Molecules/Teaser/Image Teaser',
  component: ImageTeaserComponent,
  argTypes: {},
} as Meta;

const ImageTeaserTemplate: Story<ImageTeaserProps> = (
  args: ImageTeaserProps
): ReactElement => <ImageTeaserComponent {...args} />;

export const ImageTeaser = ImageTeaserTemplate.bind({});

ImageTeaser.args = {
  headlineText: 'Welcome to Mexico',
  text: 'Jetzt die neue Sache kaufen. Jetzt die neue Sache kaufen. Jetzt die neue Sache kaufen. Jetzt die neue Sache kaufen.',
  linkText: 'Ab sofort entdecken',
  backgroundImageUrl:
    'https://mwpap-product-images.s3.eu-central-1.amazonaws.com/specials/6108132a377f822c1f39e5e4.jpeg',
  backgroundColor: 'gray',
  handleClick: () => console.log('Click Handled'),
};
