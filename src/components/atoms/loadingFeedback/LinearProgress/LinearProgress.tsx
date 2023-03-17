import MuiLinearProgress from '@mui/material/LinearProgress';
import { FC } from 'react';
import { LinearProgressProps } from './interfaces/LinearProgressProps';

export const LinearProgress: FC<LinearProgressProps> = (props) => {
  const { ...rest } = props;

  return <MuiLinearProgress {...rest} />;
};

export default LinearProgress;
