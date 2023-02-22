/* eslint-disable no-console */

import React, { ReactElement } from 'react';
import { Meta, Story } from '@storybook/react';

import { TextTeaserProps } from '@/interfaces';
import TextTeaserComponent from './TextTeaser';

export default {
  title: 'Basic Components/Molecules/Teaser/Text Teaser',
  component: TextTeaserComponent,
  argTypes: {},
} as Meta;

const TextTeaserTemplate: Story<TextTeaserProps> = (
  args: TextTeaserProps
): ReactElement => <TextTeaserComponent {...args} />;

export const TextTeaser = TextTeaserTemplate.bind({});

TextTeaser.args = {
  headlineText: 'Welcome to Mexico',
  text: 'Jetzt die neue Sache kaufen. Jetzt die neue Sache kaufen. Jetzt die neue Sache kaufen. Jetzt die neue Sache kaufen.',
  copyAsPlainText: true,
  cta: {
    label: 'Zum shop',
    href: 'https://github.com',
  },
};
