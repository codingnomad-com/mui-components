import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import IframeComponent from './Iframe';
import { IframeProps } from '@/interfaces';

export default {
  title: 'Basic Components/Atoms/Iframe',
  component: IframeComponent,
  argTypes: {},
} as Meta;

const IframeTemplate: Story<IframeProps> = (
  args: IframeProps
): ReactElement => (
  <div style={{ height: '500px', width: '100%' }}>
    <IframeComponent {...args} />
  </div>
);

export const Iframe = IframeTemplate.bind({});

Iframe.args = {
  src: 'https://toggl.com/',
};
