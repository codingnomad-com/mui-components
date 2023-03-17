import { TableProps as MuiTableProps } from '@mui/material/Table';
import { ReactElement } from 'react';

type TableBaseProps = Pick<MuiTableProps, 'padding' | 'size' | 'stickyHeader'>;

export interface TableProps extends TableBaseProps {
  children: ReactElement;
}
