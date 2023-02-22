/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Meta, Story } from '@storybook/react';
import React, { ReactElement, useState } from 'react';
import { FilterSelectProps } from '@/interfaces';
import FilterSelectComponent from './FilterSelect';
import { FilterSelectItem } from '@/types';

export default {
  title: 'Basic Components/Molecules/Filter/Filter Select',
  component: FilterSelectComponent,
  argTypes: {},
} as Meta;

const FilterSelectTemplate: Story<FilterSelectProps> = (
  args: FilterSelectProps
): ReactElement => {
  const { items: initialItems } = args;

  const [items, setItems] = useState(initialItems);

  const handleChange = (result: FilterSelectItem[]) => {
    setItems(result);
  };

  return (
    <div>
      <FilterSelectComponent
        {...args}
        handleChange={handleChange}
        items={items}
      />

      <ul style={{ marginTop: 40 }}>
        <li>
          - Bei einer SingleSelect-Liste kann als Default zum unselecten ein
          Wert mit leerem Value eingetragen werden
        </li>
      </ul>
    </div>
  );
};
export const FilterSelect = FilterSelectTemplate.bind({});

FilterSelect.args = {
  id: 'xyzsss',
  isMulti: false,
  textColor: 'black',
  labelText: 'Kategorie',
  placeholder: '',
  labelColor: 'gray',
  placeholderColor: 'primary',
  name: 'category',
  items: [
    { value: 'shopping', label: 'Shopping', selected: false },
    { value: 'books', label: 'Bücher', selected: false },
    { value: 'stamps', label: 'Briefmarken', selected: false },
  ],
};
