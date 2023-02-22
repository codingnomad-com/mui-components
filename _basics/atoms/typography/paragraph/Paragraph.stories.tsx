import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';
import { ParagraphProps } from '@/interfaces';

import ParagraphComponent from './Paragraph';

export default {
  title: 'Basic Components/Atoms/Typography/Paragraph',
  component: ParagraphComponent,
  argTypes: {},
} as Meta;

const ParagraphTemplate: Story<ParagraphProps> = (
  args: ParagraphProps
): ReactElement => (
  <ParagraphComponent {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </ParagraphComponent>
);

export const Paragraph = ParagraphTemplate.bind({});

Paragraph.args = {
  styleProps: 'width: 65%;',
};
