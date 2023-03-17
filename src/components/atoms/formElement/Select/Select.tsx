import MuiSelect from '@mui/material/Select';
import { FC } from 'react';
import { SelectProps } from './interfaces/SelectProps';

export const Select: FC<SelectProps> = (props) => {
  const { children, ...rest } = props;

  return <MuiSelect {...rest}>{children}</MuiSelect>;
};

export default Select;
