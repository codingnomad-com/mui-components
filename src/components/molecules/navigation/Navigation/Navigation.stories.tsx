import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { NavigationProps } from './interfaces/NavigationProps';
import { navigationConfig } from './mock/NavigationConfig';
import { Navigation as NavigationComponent } from './Navigation';

export default {
  title: 'Molecules/Navigation/Navigation',
  component: NavigationComponent,
  argTypes: {},
} as Meta;

const NavigationTemplate: Story<NavigationProps> = (
  args: NavigationProps,
): ReactElement => {
  return <NavigationComponent {...args} />;
};

export const Navigation = NavigationTemplate.bind({});

Navigation.args = navigationConfig;
