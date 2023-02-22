import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import Component from './LoginForm';
import { LoginFormProps, LoginQueryData } from '@/interfaces';

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
  title: 'Basic Components/Molecules/Forms/LoginForm',
  component: Component,
  argTypes: {},
} as Meta;

const LoginFormTemplate: Story<LoginFormProps> = (props) => (
  <ApolloProvider client={client}>
    <Component {...props} />
  </ApolloProvider>
);

export const LoginForm = LoginFormTemplate.bind({});

LoginForm.args = {
  passwordForgetProps: {
    link: 'google.com',
    label: 'Passwort vergessen?',
    target: '_blank',
  },
  signupProps: {
    link: '/signup',
    label: 'Noch kein Zugang? Jetzt Registrieren',
  },
  submitProps: {
    label: 'Login Vorteilswelt',
    icon: 'lock',
  },
  onCompleted: (data: LoginQueryData) => {
    console.log('====== onCompleted =======', data);
  },
  onError: (data: string) => {
    console.log('====== onError =======', data);
  },
};
