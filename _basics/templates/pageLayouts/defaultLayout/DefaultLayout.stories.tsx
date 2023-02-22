import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import Paragraph from '@basics/atoms/typography/paragraph/Paragraph';
import DefaultLayoutComponent from './DefaultLayout';
import { DefaultLayoutProps } from '@/interfaces';

export default {
  title: 'Basic Components/Templates/Page Layouts/Default Layout',
  component: DefaultLayoutComponent,
  argTypes: {},
} as Meta;

const DefaultLayoutTemplate: Story<DefaultLayoutProps> = (
  args: DefaultLayoutProps
): ReactElement => <DefaultLayoutComponent {...args} />;

export const DefaultLayout = DefaultLayoutTemplate.bind({});

DefaultLayout.args = {
  content: <Paragraph>Content slot</Paragraph>,
};
