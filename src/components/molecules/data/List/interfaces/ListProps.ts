import { ListProps as MuiListProps } from '@mui/material/List';

type ListBaseProps = Pick<
  MuiListProps,
  'children' | 'dense' | 'disablePadding' | 'subheader' | 'sx'
>;

export type ListProps = ListBaseProps;
