import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { Card as CardComponent } from './Card';
import { CardProps } from './interfaces/CardProps';

export default {
  title: 'Molecules/Data/Card',
  component: CardComponent,
  argTypes: {},
} as Meta;

const CardTemplate: Story<CardProps> = (args: CardProps): ReactElement => {
  return (
    <CardComponent {...args}>
      <span>I am a Card</span>
    </CardComponent>
  );
};

export const Card = CardTemplate.bind({});
