import MuiHeadline from '@mui/material/Typography';
import { FC } from 'react';
import { HeadlineProps } from './interfaces/HeadlineProps';

export const Headline: FC<HeadlineProps> = (props) => {
  const { children, ...rest } = props;

  return <MuiHeadline {...rest}>{children}</MuiHeadline>;
};

export default Headline;
