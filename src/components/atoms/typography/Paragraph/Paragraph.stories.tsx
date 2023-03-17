import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { ParagraphProps } from './interfaces/ParagraphProps';
import { Paragraph as ParagraphComponent } from './Paragraph';

export default {
  title: 'Atoms/Typography/Paragraph',
  component: ParagraphComponent,
  argTypes: {},
} as Meta;

const ParagraphTemplate: Story<ParagraphProps> = (
  args: ParagraphProps,
): ReactElement => {
  return <ParagraphComponent {...args} />;
};

export const Paragraph = ParagraphTemplate.bind({});

Paragraph.args = {
  align: 'left',
  label: 'I am a Paragraph',
};
