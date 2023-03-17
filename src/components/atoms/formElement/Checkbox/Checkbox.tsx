import MuiCheckbox from '@mui/material/Checkbox';
import { FC } from 'react';
import { CheckboxProps } from './interfaces/CheckboxProps';

export const Checkbox: FC<CheckboxProps> = (props) => {
  const { ...rest } = props;

  return <MuiCheckbox {...rest} />;
};

export default Checkbox;
