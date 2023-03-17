import { DividerProps as MuiDividerProps } from '@mui/material/Divider';

type DividerBaseProps = Pick<
  MuiDividerProps,
  'absolute' | 'flexItem' | 'light' | 'orientation' | 'textAlign' | 'variant'
>;

export type DividerProps = DividerBaseProps;
