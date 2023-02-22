/* eslint-disable no-console */
import { Meta, Story } from '@storybook/react';
import React, { ReactElement, useState } from 'react';
import { SearchFieldProps } from '@/interfaces';

import SearchFieldComponent from './SearchField';

export default {
  title: 'Basic Components/Molecules/Filter/Search Field',
  component: SearchFieldComponent,
  argTypes: {},
} as Meta;

const SearchFieldTemplate: Story<SearchFieldProps> = (
  args: SearchFieldProps
): ReactElement => {
  const [value, setValue] = useState('');

  const handleChange = (query: string) => setValue(query);

  const handlePressEnter = (val: string) => {
    console.log('val', val);
  };

  return (
    <div onClick={() => console.log(`value`, value)}>
      <SearchFieldComponent
        {...args}
        value={value}
        handleChange={handleChange}
        handlePressEnter={handlePressEnter}
      />
    </div>
  );
};

export const SearchField = SearchFieldTemplate.bind({});

SearchField.args = {
  id: 'id1',
  name: 'query',
  value: '',
  label: 'Suche',
  fieldTextColor: 'black',
  labelColor: 'black',
};
