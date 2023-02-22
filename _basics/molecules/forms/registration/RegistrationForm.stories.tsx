import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import Component from './RegistrationForm';
import { RegistrationFormProps } from '@/interfaces';

const client = new ApolloClient({
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
    },
    query: {
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
  connectToDevTools: true,
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

export default {
  title: 'Basic Components/Molecules/Forms/RegistrationForm',
  component: Component,
  argTypes: {},
} as Meta;

const RegistrationFormTemplate: Story<RegistrationFormProps> = (props) => (
  <ApolloProvider client={client}>
    <Component {...props} />
  </ApolloProvider>
);

export const RegistrationForm = RegistrationFormTemplate.bind({});

RegistrationForm.args = {
  stepsProps: [
    {
      headlineProps: {
        children: 'Legitimieren Sie sich',
      },
      submitLabel: 'Weiter zum nächstem Schritt',
    },
    {
      headlineProps: {
        children: 'Hallo, {{firstName}}',
      },
      submitLabel: 'Weiter zum nächstem Schritt',
    },
  ],
};
