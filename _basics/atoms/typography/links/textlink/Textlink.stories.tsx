/* eslint-disable no-console */
import { Meta, Story } from '@storybook/react';
import React, { ReactElement, MouseEvent } from 'react';
import Paragraph from '@basics/atoms/typography/paragraph/Paragraph';
import { TextlinkProps } from '@/interfaces';

import TextlinkComponent from './Textlink';

export default {
  title: 'Basic Components/Atoms/Typography/Links/Textlink',
  component: TextlinkComponent,
  argTypes: {},
} as Meta;

const TextlinkTemplate: Story<TextlinkProps> = (
  args: TextlinkProps
): ReactElement => (
  <Paragraph>
    Ein <TextlinkComponent {...args}>Textlink</TextlinkComponent> mein Freund
  </Paragraph>
);

export const Textlink = TextlinkTemplate.bind({});

const handleClick = (event: MouseEvent) => {
  console.log(`event.target`, event.target);
};

Textlink.args = {
  handleClick,
};
