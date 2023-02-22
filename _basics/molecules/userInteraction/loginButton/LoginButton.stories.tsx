import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';
import { LoginButtonProps } from '@/interfaces';

import LoginButtonComponent from './LoginButton';

export default {
  title: 'Basic Components/Molecules/User Interaction/Login Button',
  component: LoginButtonComponent,
  argTypes: {},
} as Meta;

const LoginButtonTemplate: Story<LoginButtonProps> = (
  args: LoginButtonProps
): ReactElement => <LoginButtonComponent {...args} />;

export const LoginButton = LoginButtonTemplate.bind({});

LoginButton.args = {
  isLoggedIn: false,
  buttonSize: 'medium',
  loginButtonBorderColor: 'primary',
  loginButtonColor: 'primary',
  loginButtonLabel: 'Login',
  loginButtonTextColor: 'white',
  loginIconName: 'lock-open-alt',
  loginIconPosition: 'right',
  loginIconSpacing: '10px',
  loginIconStyle: 'light',
  logoutButtonBorderColor: 'secondary',
  logoutButtonColor: 'secondary',
  logoutButtonLabel: 'Logout',
  logoutButtonTextColor: 'white',
  logoutIconName: 'lock-alt',
  logoutIconPosition: 'right',
  logoutIconSpacing: '10px',
  logoutIconStyle: 'light',
};
