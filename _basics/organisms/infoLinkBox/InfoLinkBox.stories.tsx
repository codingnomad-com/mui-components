/* eslint-disable no-console */

import { Meta, Story } from '@storybook/react';
import React, { ReactElement, useRef } from 'react';

import InfoLinkBoxComponent from './InfoLinkBox';
import { InfoLinkBoxProps } from '@/interfaces';

export default {
  title: 'Basic Components/Organisms/Info Link Box',
  component: InfoLinkBoxComponent,
  argTypes: {},
} as Meta;

const InfoLinkBoxTemplate: Story<InfoLinkBoxProps> = (
  args: InfoLinkBoxProps
): ReactElement => {
  const myRef = useRef<null | HTMLHeadingElement>(null);
  const executeScroll = () =>
    myRef?.current?.scrollIntoView({ behavior: 'smooth' });

  // eslint-disable-next-line react/destructuring-assignment
  (args.listItems || []).forEach((item) => {
    item.handleClick = executeScroll;
  });

  return (
    <>
      <InfoLinkBoxComponent {...args} />

      <div
        style={{
          marginTop: 100,
          height: 2500,
          background: 'linear-gradient(to right, #134e5e, #71b280)',
        }}
      />

      <h2 ref={myRef}>Hallo</h2>
    </>
  );
};

export const InfoLinkBox = InfoLinkBoxTemplate.bind({});

InfoLinkBox.args = {
  imageUrl:
    'https://pap-staging.mehrwerk.de/ext/image/shop-logo/5484f0366f9c422261d2a264.png',
  listItems: [
    {
      text: 'SENF IM GLAS',
      iconName: 'industry',
    },
    {
      text: 'KETCHUP SCHMETCHUP',
      iconName: 'cut',
    },
  ],
  notificationHeadline: 'Achtung Achtung, es brennt in Salon',
};
