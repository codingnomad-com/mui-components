import React, { ReactElement } from 'react';
import { Meta, Story } from '@storybook/react';
import { ContactTileProps } from '@/interfaces';

import ContactTileComponent from './ContactTile';

export default {
  title: 'Basic Components/Molecules/ContactTile',
  component: ContactTileComponent,
  argTypes: {},
} as Meta;

const ContactTileTemplate: Story<ContactTileProps> = (): ReactElement => (
  <ContactTileComponent
    email="test@test.com"
    openingHours={[
      { dayString: 'Montag bis Freitag', timeString: '8 bis 20 Uhr' },
      { dayString: 'Samstag', timeString: '8 bis 14 Uhr' },
    ]}
    phoneNumber={{
      countryCode: 'DE',
      areaCode: '111',
      number: '7000-200',
    }}
    inline
  />
);

export const ContactTile = ContactTileTemplate.bind({});

ContactTile.args = {};
