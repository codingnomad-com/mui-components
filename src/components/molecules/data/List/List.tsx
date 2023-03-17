import MuiList from '@mui/material/List';
import { FC } from 'react';
import { ListProps } from './interfaces/ListProps';

export const List: FC<ListProps> = (props) => {
  const { children, ...rest } = props;

  return <MuiList {...rest}>{children}</MuiList>;
};

export default List;
