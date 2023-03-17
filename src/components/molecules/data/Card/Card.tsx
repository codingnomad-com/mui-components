import MuiCard from '@mui/material/Card';
import { FC } from 'react';
import { CardProps } from './interfaces/CardProps';

export const Card: FC<CardProps> = (props) => {
  const { children, ...rest } = props;

  return <MuiCard {...rest}>{children}</MuiCard>;
};

export default Card;
