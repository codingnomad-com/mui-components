import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { Caption as CaptionComponent } from './Caption';
import { CaptionProps } from './interfaces/CaptionProps';

export default {
  title: 'Atoms/Typography/Caption',
  component: CaptionComponent,
  argTypes: {},
} as Meta;

const CaptionTemplate: Story<CaptionProps> = (
  args: CaptionProps,
): ReactElement => {
  return <CaptionComponent {...args} />;
};

export const Caption = CaptionTemplate.bind({});

Caption.args = {
  align: 'left',
  label: 'I am a Caption',
};
