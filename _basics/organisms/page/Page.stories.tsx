import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';
import Container from '@basics/atoms/layout/container/Container';
import Grid from '@basics/atoms/layout/grid/Grid';
import Item from '@basics/atoms/layout/item/Item';
import Paragraph from '@basics/atoms/typography/paragraph/Paragraph';

import PageComponent from './Page';
import { PageProps } from '@/interfaces';

export default {
  title: 'Basic Components/Organisms/Page',
  component: PageComponent,
  argTypes: {},
} as Meta;

const PageTemplate: Story<PageProps> = (args: PageProps): ReactElement => (
  <PageComponent {...args}>
    <Grid>
      <Container>
        <Item>
          <Paragraph>Ich bin eine Page</Paragraph>
        </Item>
      </Container>
    </Grid>
  </PageComponent>
);

export const Page = PageTemplate.bind({});

Page.args = {
  backlinkLabel: 'zurück zur Übersicht',
  showBacklink: true,
  metaPageTitle: 'Storybook Test-Titel',
  metaPageDescription: 'Storybook Test-Beschreibung',
  headerGridBackgroundColor: 'white',
  subNavigationGridBackgroundColor: 'primary',
  footerGridBackgroundColor: 'primary',
  hasSubNavigation: true,
  isLoggedIn: false,
  loginButtonSize: 'small',
  loginButtonBorderColor: 'primary',
  loginButtonColor: 'primary',
  loginButtonLabel: '',
  loginButtonTextColor: 'white',
  loginIconName: 'lock-open-alt',
  loginIconPosition: 'left',
  loginIconSpacing: '0px',
  loginIconStyle: 'light',
  logoutButtonBorderColor: 'primary',
  logoutButtonColor: 'primary',
  logoutButtonLabel: '',
  logoutButtonTextColor: 'white',
  logoutIconName: 'sign-out-alt',
  logoutIconPosition: 'left',
  logoutIconSpacing: '0px',
  logoutIconStyle: 'light',
  footerLogo: {
    url: 'https://via.placeholder.com/200x100.png?text=Footer+Logo',
    alternativeText: 'Footer Logo',
  },
  footerTextColor: 'white',
  footerText:
    'Eine Leistung der Mehrwerk GmbH<br/>(kein Vertragsschluss mit der Oldenburgischen Landesbank AG)',
  mainNavigationItems: [
    {
      title: 'Vorort Vorteile',
      link: '/',
    },
    {
      title: 'Shops + Produkte',
      link: '/',
    },
    {
      title: 'Events',
      link: '/',
    },
    {
      title: 'Konfigurator',
      link: '/',
    },
    {
      title: 'Reise',
      link: '/',
    },
    {
      title: 'Ticket',
      link: '/',
    },
    {
      title: 'Mein Bereich',
      link: '/Dashboard',
      children: [
        {
          title: 'Dashboard',
          link: '/',
        },
        {
          title: 'Gesamtübersicht',
          link: '/',
        },
        {
          title: 'Nachbuchungsanfrage',
          link: '/',
        },
        {
          title: 'Garantieverlängerung',
          link: '/',
        },
        {
          title: 'Einstellungen',
          link: '/',
        },
      ],
    },
  ],
  footerNavigationItems: [
    {
      title: 'Allgemeine Geschäftsbedingungen',
      link: '/',
    },
    {
      title: 'Datenschutz',
      link: '/',
    },
    {
      title: 'Impressum',
      link: '/',
    },
  ],
};
