import React, { ReactElement } from 'react';
import { Meta, Story } from '@storybook/react';

import Component from './InfoBox';
import { InfoBoxProps } from '@/interfaces';

export default {
  title: 'Basic Components/Molecules/Information/InfoBox',
  component: Component,
  argTypes: {},
} as Meta;

const BoxTemplate: Story<InfoBoxProps> = (args): ReactElement => (
  <Component {...args} />
);

export const InfoBox = BoxTemplate.bind({});

InfoBox.args = {
  headline: 'Allgemeine Infos',
  text: 'Bitte achten Sie darauf, dass Gutscheine meist nicht mit dem angegebenen Cashback kombiniert werden können. Dies gilt auch für käuflich erworbene Gutschein im Shop selbst oder von Groupon o.ä. Die Verwendung von Gutscheinen führt in den meisten Fällen zur Ablehnung des Bonus. Alle prozentualen Rabatte beziehen sich auf den Bruttoeinkaufswert (Versandkosten werden nicht mit in die Bonusberechnung einbezogen, der Bruttoeinkaufswert ist damit im Normalfall etwas geringer als der Rechnungsbetrag). Reklamationen müssen spätestens 3 Monate nach Buchung versendet werden. Anfragen, die später eingehen werden nicht berücksichtigt.',
};
