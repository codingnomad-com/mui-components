import MuiOverline from '@mui/material/Typography';
import { FC } from 'react';
import { OverlineProps } from './interfaces/OverlineProps';

export const Overline: FC<OverlineProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <MuiOverline {...rest} variant="overline">
      {children}
    </MuiOverline>
  );
};

export default Overline;
