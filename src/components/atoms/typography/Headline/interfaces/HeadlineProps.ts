import { TypographyProps as MuiHeadlineProps } from '@mui/material/Typography';
import { HeadlineVariant } from '../types/HeadlineVariant';

type HeadlineBaseProps = Pick<
  MuiHeadlineProps,
  'align' | 'children' | 'gutterBottom' | 'noWrap' | 'variant'
>;

export interface HeadlineProps extends HeadlineBaseProps {
  variant: HeadlineVariant;
}
