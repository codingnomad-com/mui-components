import MuiTable from '@mui/material/Table';
import { FC } from 'react';
import { TableProps } from './interfaces/TableProps';

export const Table: FC<TableProps> = (props) => {
  const { children, ...rest } = props;

  return <MuiTable {...rest}>{children}</MuiTable>;
};

export default Table;
