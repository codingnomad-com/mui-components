import MuiDivider from '@mui/material/Divider';
import { FC } from 'react';
import { DividerProps } from './interfaces/DividerProps';

export const Divider: FC<DividerProps> = (props) => {
  const { ...rest } = props;

  return <MuiDivider {...rest} />;
};

export default Divider;
