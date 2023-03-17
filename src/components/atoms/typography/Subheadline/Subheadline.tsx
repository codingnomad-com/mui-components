import MuiSubheadline from '@mui/material/Typography';
import { FC } from 'react';
import { SubheadlineProps } from './interfaces/SubheadlineProps';

export const Subheadline: FC<SubheadlineProps> = (props) => {
  const { children, ...rest } = props;

  return <MuiSubheadline {...rest}>{children}</MuiSubheadline>;
};

export default Subheadline;
