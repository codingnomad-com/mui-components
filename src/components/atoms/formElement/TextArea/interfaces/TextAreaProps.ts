import { TextFieldProps as MuiTextAreaProps } from '@mui/material/TextField';

type TextAreaBaseProps = Pick<
  MuiTextAreaProps,
  | 'color'
  | 'defaultValue'
  | 'disabled'
  | 'error'
  | 'fullWidth'
  | 'label'
  | 'placeholder'
  | 'required'
  | 'size'
  | 'variant'
  | 'onChange'
  | 'rows'
  | 'maxRows'
  | 'minRows'
>;

export type TextAreaProps = TextAreaBaseProps;
