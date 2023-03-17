import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { Divider } from '../../../atoms/layout/Divider/Divider';
import { MetaMenuProps } from './interfaces/MetaMenuProps';
import { MenuItem } from './MenuItem';
import { MetaMenu as MetaMenuComponent } from './MetaMenu';

export default {
  title: 'Molecules/Navigation/Meta Menu',
  component: MetaMenuComponent,
  argTypes: {},
} as Meta;

const MetaMenuTemplate: Story<MetaMenuProps> = (
  args: MetaMenuProps,
): ReactElement => {
  return (
    <MetaMenuComponent {...args}>
      <MenuItem label="Entry two" />
      <MenuItem label="Entry two" />
      <Divider></Divider>
      <MenuItem label="Entry three"></MenuItem>
    </MetaMenuComponent>
  );
};

export const MetaMenu = MetaMenuTemplate.bind({});

MetaMenu.args = {
  open: true,
};
