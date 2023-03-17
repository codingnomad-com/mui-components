import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { TextAreaProps } from './interfaces/TextAreaProps';
import { TextArea as TextAreaComponent } from './TextArea';

export default {
  title: 'Atoms/Form Element/TextArea',
  component: TextAreaComponent,
  argTypes: {},
} as Meta;

const TextAreaTemplate: Story<TextAreaProps> = (
  args: TextAreaProps,
): ReactElement => {
  return <TextAreaComponent {...args} />;
};

export const TextArea = TextAreaTemplate.bind({});

TextArea.args = {
  color: 'pramary',
  label: 'I am a TextArea',
  size: 'medium',
  variant: 'outlined',
};
