import MuiListItemText from '@mui/material/ListItemText';
import { FC } from 'react';
import { ListItemTextProps } from './interfaces/ListItemTextProps';

export const ListItemText: FC<ListItemTextProps> = (props) => {
  const { ...rest } = props;

  return <MuiListItemText {...rest} />;
};

export default ListItemText;
