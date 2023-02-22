import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';
import { NotificationProps } from '@/interfaces';

import NotificationComponent from './Notification';

export default {
  title: 'Basic Components/Molecules/Feedback/Notification',
  component: NotificationComponent,
  argTypes: {},
} as Meta;

const NotificationTemplate: Story<NotificationProps> = (
  args: NotificationProps
): ReactElement => <NotificationComponent {...args} />;

export const Notification = NotificationTemplate.bind({});

Notification.args = {
  type: 'warning',
  fontWeight: 'bold',
  headline: 'Hallu',
  descriptionFontWeight: 'normal',
  description: 'Hallu2',
  iconStyle: 'regular',
  iconName: 'beer',
};
