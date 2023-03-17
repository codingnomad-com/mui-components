import MuiBox from '@mui/material/Box';
import { FC } from 'react';
import { BoxProps } from './interfaces/BoxProps';

export const Box: FC<BoxProps> = (props) => {
  const { children, ...rest } = props;

  return <MuiBox {...rest}>{children}</MuiBox>;
};

export default Box;
