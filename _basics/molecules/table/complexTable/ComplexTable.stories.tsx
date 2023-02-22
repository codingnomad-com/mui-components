/* eslint-disable no-console */
import { Meta, Story } from '@storybook/react';
import React, { MouseEvent, ReactElement } from 'react';

import ComplexTableComponent from './ComplexTable';
import { ComplexTableProps } from '@/interfaces';
import { SortDirection } from '@/types/SortDirection';

export default {
  title: 'Basic Components/Molecules/Table/ComplexTable',
  component: ComplexTableComponent,
  argTypes: {},
} as Meta;

const ComplexTableTemplate: Story<ComplexTableProps> = (
  args: ComplexTableProps
): ReactElement => <ComplexTableComponent {...args} />;

export const ComplexTable = ComplexTableTemplate.bind({});

ComplexTable.args = {
  headlineProps: {
    children: 'Cashbackübersicht',
    fontWeight: 'bold',
    headlineLevel: 'h4',
  },
  tableProps: {
    tableTextColor: 'primary',
    tableBackgroundColor: 'white',
    tableHeaderTextColor: 'primary',
    tableHeaderBackgroundColor: 'gray',
    tableFooterTextColor: 'primary',
    tableFooterBackgroundColor: 'gray',
    tableHighlightColor: 'secondary',
    handleSortTable: (columnId: string, direction: SortDirection) =>
      console.log(`{columnId, direction}`, { columnId, direction }),
    tableColumns: [
      {
        id: 'Col1',
        label: 'Datum',
        headerAlign: 'center',
        dataAlign: 'left',
      },
      {
        id: 'Col2',
        label: 'Shop',
        headerAlign: 'center',
        dataAlign: 'left',
        sortable: true,
        currentSortDir: 'asc',
      },
      {
        id: 'Col3',
        label: 'Cashback',
        headerAlign: 'center',
        dataAlign: 'left',
        footerAlign: 'left',
        sortable: true,
        sum: 45.33,
      },
      {
        id: 'Col4',
        label: 'Status',
        headerAlign: 'center',
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
  },
  paginationProps: {
    currentPage: 6,
    numberOfPages: 23,
    paginationAlignment: 'right',
    buttonSize: 'small',
    buttonColor: 'secondary',
    buttonBorderColor: 'secondary',
    buttonTextColor: 'white',
    activeButtonColor: 'primary',
    activeButtonBorderColor: 'primary',
    activeButtonTextColor: 'white',
    iconStyle: 'light',
    prevIconName: 'arrow-left',
    nextIconName: 'arrow-right',
    handlePageChange: (event: MouseEvent, page: number) => {
      console.log('event', event);
      console.log('page', page);
    },
  },
  boxProps: {
    margin: '16px',
  },
};
