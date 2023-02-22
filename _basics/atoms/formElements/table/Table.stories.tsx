/* eslint-disable no-console */

import { Meta, Story } from '@storybook/react';
import React, { ReactElement } from 'react';
import { SortDirection } from '@/types';
import { TableProps } from '@/interfaces';

import TableComponent from './Table';

export default {
  title: 'Basic Components/Atoms/Form Elements/Table',
  component: TableComponent,
  argTypes: {},
} as Meta;

const TableTemplate: Story<TableProps> = (args: TableProps): ReactElement => (
  <TableComponent {...args} />
);

export const Table = TableTemplate.bind({});

Table.args = {
  handleSortTable: (columnId: string, direction: SortDirection) =>
    console.log(`{columnId, direction}`, { columnId, direction }),
  tableColumns: [
    {
      id: 'Col1',
      label: 'Datum',
      headerAlign: 'left',
      dataAlign: 'left',
    },
    {
      id: 'Col2',
      label: 'Shop',
      headerAlign: 'left',
      dataAlign: 'left',
      sortable: true,
    },
    {
      id: 'Col3',
      label: 'Cashback',
      headerAlign: 'left',
      dataAlign: 'left',
      footerAlign: 'left',
      sortable: true,
      sum: 45.33,
    },
    {
      id: 'Col4',
      label: 'Status',
      headerAlign: 'left',
      dataAlign: 'left',
      sortable: true,
    },
  ],
  tableData: [
    {
      items: [
        {
          value: '12.12.2020',
        },
        {
          value: 'Gerry Weber',
          isHighlighted: true,
        },
        {
          value: '12,22 €',
        },
        {
          value: 'offen',
        },
      ],
      isDisabled: true,
    },
    {
      items: [
        {
          value: '22.02.2021',
        },
        {
          value: 'Euronics',
        },
        {
          value: '32,11 €',
        },
        {
          value: 'bestätigt',
        },
      ],
    },
  ],
};
