import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';
import { NotificationBoxProps } from '@/interfaces';

import NotificationBoxComponent from './NotificationBox';

export default {
  title: 'Basic Components/Atoms/Feedback/Notification Box',
  component: NotificationBoxComponent,
  argTypes: {},
} as Meta;

const NotificationBoxTemplate: Story<NotificationBoxProps> = (
  args: NotificationBoxProps
): ReactElement => (
  <NotificationBoxComponent {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.
  </NotificationBoxComponent>
);

export const NotificationBox = NotificationBoxTemplate.bind({});

NotificationBox.args = { fontWeight: 'normal' };
