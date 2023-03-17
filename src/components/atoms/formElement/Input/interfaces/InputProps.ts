import { TextFieldProps as MuiInputProps } from '@mui/material/TextField';

type InputBaseProps = Pick<
  MuiInputProps,
  | 'color'
  | 'defaultValue'
  | 'disabled'
  | 'error'
  | 'fullWidth'
  | 'placeholder'
  | 'required'
  | 'size'
  | 'variant'
  | 'onChange'
  | 'InputProps'
>;

export type InputProps = InputBaseProps;
