/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';

import { FilterProps, FilterRow } from '@/interfaces';
import FilterComponent from './Filter';

export default {
  title: 'Basic Components/Organisms/Filter',
  component: FilterComponent,
  argTypes: {},
} as Meta;

const FilterTemplate: Story<FilterProps> = (): ReactElement => {
  const filterRows: FilterRow[] = [
    {
      items: [
        {
          type: 'dateFilter',
          id: 'startDate',
          name: 'startDate',
          label: 'Startdatum',
        },
        {
          type: 'searchField',
          id: 'field21',
          name: 'query',
          value: '',
          label: 'Suche 1',
        },
        {
          type: 'searchField',
          id: 'field2',
          name: 'query2',
          value: '',
          label: 'Suche',
        },
      ],
    },
    {
      items: [
        {
          type: 'filterSelect',
          labelText: 'Kategorie',
          id: 'category',
          isMulti: true,
          textColor: 'black',
          placeholder: 'bitte auswählen',
          labelColor: 'black',
          name: 'category',
          items: [
            { value: 'shopping', label: 'Shopping', selected: false },
            { value: 'books', label: 'Bücher', selected: false },
            { value: 'stamps', label: 'Briefmarken', selected: false },
          ],
        },
        {
          type: 'sortSelect',
          id: 'Sortierung',
          labelText: 'Sortierung',
          name: 'sort',
          placeholder: 'bitte Sortierung wählen',
          items: [
            {
              value: 'name:asc',
              label: 'nach Name (aufsteigend)',
              selected: false,
            },
            {
              value: 'name:desc',
              label: 'nach Name (absteigend)',
              selected: false,
            },
            {
              value: 'createdAt:desc',
              label: 'Neuheiten',
              selected: false,
            },
          ],
        },
      ],
    },
    {
      items: [
        {
          type: 'quickFilter',
          id: 'abc',
          items: [
            {
              name: 'favorites',
              value: 'true',
              label: 'Favoriten',
              selected: false,
            },
            {
              name: 'vouchers',
              value: 'true',
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
        },
      ],
    },
    {
      justifyContent: 'space-between',
      items: [
        {
          type: 'rangeSlider',
          name: 'priceRangeSlider',
          id: 'priceRangeSlider',
          minValue: 0,
          maxValue: 100,
        },
      ],
      includeResetButton: true,
      includeSearchButton: true,
    },
  ];

  const props = {
    onSubmit: (rows: FilterRow[]) => console.log(`onSubmit`, rows),
    headlineText: 'Filterbox',
    filterRows,
  };

  return <FilterComponent {...props} />;
};

export const Filter = FilterTemplate.bind({});

Filter.args = {};
