import React, { ReactElement } from 'react';
import { Meta, Story } from '@storybook/react';
import { AccordionProps } from '@/interfaces';

import { Interferer } from '../information/interferer/Interferer.stories';
import { Tooltip } from '../information/tooltip/Tooltip.stories';

import AccordionComponent from './Accordion';

export default {
  title: 'Basic Components/Molecules/Accordion',
  component: AccordionComponent,
  argTypes: {},
} as Meta;

const AccordionTemplate: Story<AccordionProps> = (): ReactElement => (
  <div>
    <AccordionComponent
      items={[
        { title: 'Text Item 1', content: 'Test' },
        { title: 'Interferer Item 2', content: <Interferer /> },
        {
          title: 'Tooltip Item 3',
          content: (
            <Tooltip
              {...{
                tooltipText: 'this is a tooltip',
                tooltipColor: 'gray',
                tooltipBackgroundColor: 'primary',
                tooltipPosition: 'bottomCenter',
              }}
            />
          ),
        },
      ]}
    />
  </div>
);

export const Accordion = AccordionTemplate.bind({});

Accordion.args = {};
