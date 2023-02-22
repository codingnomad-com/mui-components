import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import OpeningHoursComponent from './OpeningHours';

import { OpeningHoursProps } from '@/interfaces';

export default {
  title: 'Basic Components/Atoms/Information/OpeningHours',
  component: OpeningHoursComponent,
  argTypes: {},
} as Meta;

const Template: Story<OpeningHoursProps> = (
  args: OpeningHoursProps
): ReactElement => {
  return (
    <div style={{ width: 222 }}>
      <OpeningHoursComponent
        openingHours={[
          {
            day: 'friday',
            hours: [{ from: '12', to: '20' }],
          },
          {
            day: 'saturday',
            hours: [{ from: '12:45', to: '13:20' }],
          },
          {
            day: 'sunday',
            hours: [{ from: '12:43', to: '12:47' }],
          },
        ]}
      ></OpeningHoursComponent>
    </div>
  );
};

export const OpeningHours = Template.bind({});

OpeningHours.args = {
  // headlineLevel: 'h1',
  // color: 'primary',
  // fontWeight: 'normal',
  // textAlign: 'left',
  // uppercase: false,
  // id: 'Headline (h1)',
};
