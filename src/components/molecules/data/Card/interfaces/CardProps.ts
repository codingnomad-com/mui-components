import { CardProps as MuiCardProps } from '@mui/material/Card';
import { ReactElement } from 'react';

type CardBaseProps = Pick<MuiCardProps, 'raised'>;

export interface CardProps extends CardBaseProps {
  children: ReactElement;
}
