import { ListItemTextProps as MuiListItemTextProps } from '@mui/material/ListItemText';

type ListItemTextBaseProps = Pick<
  MuiListItemTextProps,
  | 'children'
  | 'disableTypography'
  | 'inset'
  | 'primary'
  | 'secondary'
  | 'sx'
  | 'primaryTypographyProps'
>;

export type ListItemTextProps = ListItemTextBaseProps;
