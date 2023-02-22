import React, { ReactElement } from 'react';
import { Meta, Story } from '@storybook/react';
import { InterfererProps } from '@/interfaces';

import InterfererComponent from './Interferer';

export default {
  title: 'Basic Components/Molecules/Information/Interferer',
  component: InterfererComponent,
  argTypes: {},
} as Meta;

const InterfererTemplate: Story<InterfererProps> = (
  args: InterfererProps
): ReactElement => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
    }}
  >
    <div
      style={{
        width: 250,
        height: 250,
        margin: 20,
        border: '2px solid #aaa',
        backgroundColor: 'yellow',
      }}
      className="interferer-story-lol"
    />
    <InterfererComponent {...args}>
      <div
        style={{
          width: 250,
          height: 250,
          margin: 20,
          border: '2px solid #aaa',
          backgroundColor: 'pink',
        }}
        className="interferer-story-lol"
      />
    </InterfererComponent>
    <div
      style={{
        width: 250,
        height: 250,
        margin: 20,
        border: '2px solid #aaa',
        backgroundColor: 'aqua',
      }}
      className="interferer-story-lol"
    />
  </div>
);

export const Interferer = InterfererTemplate.bind({});

Interferer.args = {
  interfererLabel: 'Lecker Wurstisalat',
  interfererTextColor: 'white',
  interfererBackgroundColor: 'primary',
  interfererRotation: '2',
};
