import { SwitchProps as MuiSwitchProps } from '@mui/material/Switch';

type SwitchBaseProps = Pick<
  MuiSwitchProps,
  'color' | 'disabled' | 'required' | 'size' | 'onChange' | 'checked'
>;

export type SwitchProps = SwitchBaseProps;
