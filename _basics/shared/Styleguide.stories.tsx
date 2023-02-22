import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import StyleGuideComponent from './StyleGuide';

export default {
  title: 'Design System/Style Guide',
  component: StyleGuideComponent,
  argTypes: {},
} as Meta;

const StyleGuideTemplate: Story = (): ReactElement => <StyleGuideComponent />;

export const StyleGuide = StyleGuideTemplate.bind({});

StyleGuide.args = {};
