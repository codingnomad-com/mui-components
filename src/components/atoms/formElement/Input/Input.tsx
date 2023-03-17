import MuiInput from '@mui/material/TextField';
import { FC } from 'react';
import { InputProps } from './interfaces/InputProps';

export const Input: FC<InputProps> = (props) => {
  const { ...rest } = props;

  return <MuiInput {...rest} />;
};

export default Input;
