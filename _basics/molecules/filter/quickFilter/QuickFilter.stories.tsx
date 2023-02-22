/* eslint-disable no-console */
import { Meta, Story } from '@storybook/react';
import React, { ReactElement, useState } from 'react';
import { QuickFilterProps } from '@/interfaces';
import { QuickFilterItem } from '@/types';

import QuickFilterComponent from './QuickFilter';

export default {
  title: 'Basic Components/Molecules/Filter/Quick Filter',
  component: QuickFilterComponent,
  argTypes: {},
} as Meta;

const QuickFilterTemplate: Story<QuickFilterProps> = (
  args: QuickFilterProps
): ReactElement => {
  const { items: argItems } = args;
  const [items, setItems] = useState(argItems);

  const handleClick = (changedItems: QuickFilterItem[]) =>
    setItems(changedItems);

  return (
    <>
      <QuickFilterComponent {...args} items={items} handleClick={handleClick} />
    </>
  );
};

export const QuickFilter = QuickFilterTemplate.bind({});

QuickFilter.args = {
  id: 'xyz',
  horizontalSpacing: '20px',
  verticalSpacing: '20px',
  items: [
    {
      name: 'favorites',
      value: true,
      label: 'Favoriten',
      selected: false,
    },
    {
      name: 'vouchers',
      value: true,
      label: 'Mit Gutschein',
      selected: true,
    },
    {
      name: 'cashbackType',
      value: 'perc',
      label: 'Cashback in %',
      selected: false,
    },
    {
      name: 'cashbackType',
      value: 'eur',
      label: 'Cashback in €',
      selected: false,
    },
  ],
};
