import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import Component from './CheckoutForm';
import { CheckoutFormProps } from '@/interfaces';

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
  title: 'Basic Components/Molecules/Forms/Checkout Form',
  component: Component,
  argTypes: {},
} as Meta;

const CheckoutFormTemplate: Story<CheckoutFormProps> = (props) => (
  <ApolloProvider client={client}>
    <Component {...props} />
  </ApolloProvider>
);

export const CheckoutForm = CheckoutFormTemplate.bind({});

CheckoutForm.args = {
  data: {
    id: 'BOIL-50000',
    email: 'test@test.com',
    tenant: 'BOIL',
    verified: true,
    dateOfBirth: '1990-01-01',
    userName: 'm.mustermann@mehrwerk.de',
    firstName: 'Max',
    lastName: 'Mustermann',
    salutation: 'Mr.',
    street: 'Musterstr.',
    houseNumber: '666',
    zip: '33609',
    city: 'Bielefeld',
  },
};
