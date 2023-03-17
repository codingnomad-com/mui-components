import MuiListSubheader from '@mui/material/ListSubheader';
import { FC } from 'react';
import { ListSubheaderProps } from './interfaces/ListSubheaderProps';

export const ListSubheader: FC<ListSubheaderProps> = (props) => {
  const { children, ...rest } = props;

  return <MuiListSubheader {...rest}>{children}</MuiListSubheader>;
};

export default ListSubheader;
