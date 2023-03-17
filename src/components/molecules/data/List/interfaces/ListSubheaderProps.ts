import { ListSubheaderProps as MuiListSubheaderProps } from '@mui/material/ListSubheader';

type ListSubheaderBaseProps = Pick<
  MuiListSubheaderProps,
  'color' | 'disableGutters' | 'disableSticky' | 'inset' | 'sx'
>;

export interface ListSubheaderProps extends ListSubheaderBaseProps {
  children: string;
}
