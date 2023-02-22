import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import FontawesomeComponent from './Fontawesome';
import { FontawesomeProps } from '@/interfaces';

export default {
  title: 'Basic Components/Atoms/Icons/Fontawesome',
  component: FontawesomeComponent,
  argTypes: {},
} as Meta;

const FontawesomeTemplate: Story<FontawesomeProps> = (
  args: FontawesomeProps
): ReactElement => <FontawesomeComponent {...args}></FontawesomeComponent>;

export const Fontawesome = FontawesomeTemplate.bind({});

Fontawesome.args = {
  iconStyle: 'regular',
  iconName: 'bookmark',
};
