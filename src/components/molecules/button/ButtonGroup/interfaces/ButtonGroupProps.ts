import { ButtonGroupProps as MuiButtonGroupProps } from '@mui/material/ButtonGroup';
import { ReactElement } from 'react';
import type { Button } from '~/atoms/button/Button/Button';

type ButtonGroupBaseProps = Pick<
  MuiButtonGroupProps,
  | 'children'
  | 'color'
  | 'disabled'
  | 'fullWidth'
  | 'orientation'
  | 'size'
  | 'variant'
>;

export interface ButtonGroupProps extends ButtonGroupBaseProps {
  children: ReactElement<typeof Button>[];
}
