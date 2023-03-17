import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { LinkProps } from './interfaces/LinkProps';
import { Link as LinkComponent } from './Link';

export default {
  title: 'Atoms/Typography/Link',
  component: LinkComponent,
  argTypes: {},
} as Meta;

const LinkTemplate: Story<LinkProps> = (args: LinkProps): ReactElement => {
  return <LinkComponent {...args} />;
};

export const Link = LinkTemplate.bind({});

Link.args = {
  color: 'primary',
  align: 'left',
  label: 'I am a Link',
};
