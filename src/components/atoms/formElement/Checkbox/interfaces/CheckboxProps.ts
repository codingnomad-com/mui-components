import { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';

type CheckboxBaseProps = Pick<
  MuiCheckboxProps,
  | 'checked'
  | 'color'
  | 'defaultChecked'
  | 'disabled'
  | 'onChange'
  | 'required'
  | 'size'
>;

export type CheckboxProps = CheckboxBaseProps;
