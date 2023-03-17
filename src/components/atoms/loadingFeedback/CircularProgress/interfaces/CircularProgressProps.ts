import { CircularProgressProps as MuiCircularProgressProps } from '@mui/material/CircularProgress';

type CircularProgressBaseProps = Pick<
  MuiCircularProgressProps,
  'color' | 'disableShrink' | 'size' | 'thickness' | 'value' | 'variant'
>;

export type CircularProgressProps = CircularProgressBaseProps;
