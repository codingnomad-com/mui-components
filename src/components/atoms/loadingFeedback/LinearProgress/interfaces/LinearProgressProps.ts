import { LinearProgressProps as MuiLinearProgressProps } from '@mui/material/LinearProgress';

type LinearProgressBaseProps = Pick<
  MuiLinearProgressProps,
  'color' | 'value' | 'valueBuffer' | 'variant'
>;

export type LinearProgressProps = LinearProgressBaseProps;
