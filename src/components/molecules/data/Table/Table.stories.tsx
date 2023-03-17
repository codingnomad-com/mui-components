import { Meta, Story } from '@storybook/react';
import { ReactElement } from 'react';

import { TableProps } from './interfaces/TableProps';
import { Table as TableComponent } from './Table';

export default {
  title: 'Molecules/Data/Table',
  component: TableComponent,
  argTypes: {},
} as Meta;

const TableTemplate: Story<TableProps> = (args: TableProps): ReactElement => {
  return <TableComponent {...args} />;
};

export const Table = TableTemplate.bind({});
