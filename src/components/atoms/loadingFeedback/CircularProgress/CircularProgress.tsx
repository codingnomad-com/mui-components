import MuiCircularProgress from '@mui/material/CircularProgress';
import { FC } from 'react';
import { CircularProgressProps } from './interfaces/CircularProgressProps';

export const CircularProgress: FC<CircularProgressProps> = (props) => {
  const { ...rest } = props;

  return <MuiCircularProgress {...rest} />;
};

export default CircularProgress;
