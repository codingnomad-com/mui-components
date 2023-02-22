/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Meta, Story } from '@storybook/react';
import React, { ReactElement, useState } from 'react';
import { SortSelectProps } from '@/interfaces';
import SortSelectComponent from './SortSelect';
import { FilterSelectItem } from '@/types';

export default {
  title: 'Basic Components/Molecules/Filter/Sort Select',
  component: SortSelectComponent,
  argTypes: {},
} as Meta;

const SortSelectTemplate: Story<SortSelectProps> = (
  args: SortSelectProps
): ReactElement => {
  const { items: initialItems } = args;

  const [items, setItems] = useState(initialItems);

  const handleChange = (result: FilterSelectItem[]) => {
    setItems(result);
  };

  return (
    <SortSelectComponent {...args} handleChange={handleChange} items={items} />
  );
};
export const SortSelect = SortSelectTemplate.bind({});

SortSelect.args = {
  id: 'xyzsss',
  isMulti: false,
  textColor: 'black',
  labelText: 'Sortierung',
  placeholder: '',
  labelColor: 'gray',
  placeholderColor: 'primary',
  name: 'category',
  items: [
    {
      value: 'price:asc',
      label: 'Preis aufsteigend',
      selected: false,
    },
    {
      value: 'price:desc',
      label: 'Preis absteigend',
      selected: false,
    },
  ],
};
