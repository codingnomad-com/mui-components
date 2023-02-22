import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import FooterComponent from './Footer';
import { FooterProps } from '@/interfaces';

export default {
  title: 'Basic Components/Organisms/Page Parts/Footer',
  component: FooterComponent,
  argTypes: {},
} as Meta;

const FooterTemplate: Story<FooterProps> = (
  args: FooterProps
): ReactElement => <FooterComponent {...args}></FooterComponent>;

export const Footer = FooterTemplate.bind({});

Footer.args = {
  // footerGridBackgroundColor: 'primary',
  contents: [
    {
      type: 'contactInfos',
      content: {
        headline: 'Kontakt',
        openingHoursHeadline: 'Notfallservice rund um die Uhr',
        openingHours: [
          { day: 'monday', hours: [{ from: '8', to: '20' }] },
          { day: 'tuesday', hours: [{ from: '8', to: '20' }] },
          { day: 'wednesday', hours: [{ from: '8', to: '20' }] },
          { day: 'thursday', hours: [{ from: '8', to: '20' }] },
          { day: 'friday', hours: [{ from: '8', to: '20' }] },
          { day: 'saturday', hours: [{ from: '8', to: '12' }] },
        ],
        phoneNumber: {
          countryCode: 'DE',
          areaCode: '111',
          number: '7000-200',
        },
        email: 'service@hotline.de',
      },
    },

    {
      type: 'footerNavigation',
      content: {
        headline: 'Hilfe & Informationen',
        items: [
          {
            title: 'Dashboard',
            link: '/dashboard',
          },
          {
            title: 'Shops & Produkte',
            link: '/shops',
          },
          {
            title: 'Reisen',
            link: '/travel',
          },
          {
            title: 'Regio Cashback',
            link: '/dashboard',
          },
          {
            title: 'FAQ',
            link: '/shops',
          },
          {
            title: 'Datenschutz',
            link: '/travel',
          },
          {
            title: 'Impressum',
            link: '/dashboard',
          },
          {
            title: 'Mein Konto',
            link: '/shops',
          },
        ],
      },
    },
    {
      type: 'iconLinkSection',
      content: {
        headline: 'Subscribe',
        icons: [
          { link: 'https://www.web.de' },
          { link: 'https://www.web.de', icon: 'acorn' },
          { link: 'https://www.web.de', icon: 'wind' },
        ],
      },
    },
  ],
  footerLogo: {
    url: 'https://via.placeholder.com/200x100.png?text=Footer+Logo',
    alternativeText: 'Footer Logo',
  },
  // footerTextColor: 'white',
  footerTextColor: 'white',
  footerText:
    'Eine Leistung der Mehrwerk GmbH<br/>(kein Vertragsschluss mit der Oldenburgischen Landesbank AG)',
};
