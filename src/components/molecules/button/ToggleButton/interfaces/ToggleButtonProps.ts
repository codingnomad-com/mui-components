import Icon from '@mui/material/Icon/Icon';
import { ToggleButtonProps as MuiToggleButtonProps } from '@mui/material/ToggleButton';
import { ReactElement } from 'react';

type ToggleButtonBaseProps = Pick<
  MuiToggleButtonProps,
  | 'color'
  | 'disabled'
  | 'fullWidth'
  | 'onChange'
  | 'onClick'
  | 'selected'
  | 'size'
  | 'ref'
  | 'value'
>;

export interface ToggleButtonProps extends ToggleButtonBaseProps {
  children: ReactElement<typeof Icon | string>;
}
