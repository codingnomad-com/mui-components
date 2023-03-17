import { TypographyProps as MuiSubheadlineProps } from '@mui/material/Typography';
import { SubheadlineVariant } from '../types/SubheadlineVariant';

type SubheadlineBaseProps = Pick<
  MuiSubheadlineProps,
  'align' | 'children' | 'gutterBottom' | 'noWrap'
>;

export interface SubheadlineProps extends SubheadlineBaseProps {
  variant: SubheadlineVariant;
}
