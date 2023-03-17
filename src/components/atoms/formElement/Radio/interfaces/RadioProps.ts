import { RadioProps as MuiRadioProps } from '@mui/material/Radio';

type RadioBaseProps = Pick<
  MuiRadioProps,
  | 'checked'
  | 'color'
  | 'defaultChecked'
  | 'disabled'
  | 'onChange'
  | 'required'
  | 'size'
>;

export type RadioProps = RadioBaseProps;
