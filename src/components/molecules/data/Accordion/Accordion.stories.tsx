import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { Accordion as AccordionComponent } from './Accordion';
import { AccordionProps } from './interfaces/AccordionProps';

export default {
  title: 'Molecules/Data/Accordion',
  component: AccordionComponent,
  argTypes: {},
} as Meta;

const AccordionTemplate: Story<AccordionProps> = (
  args: AccordionProps,
): ReactElement => {
  return <AccordionComponent {...args} />;
};

export const Accordion = AccordionTemplate.bind({});
