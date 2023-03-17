import { TypographyProps as MuiOverlineProps } from '@mui/material/Typography';

type OverlineBaseProps = Pick<
  MuiOverlineProps,
  'align' | 'children' | 'gutterBottom' | 'noWrap'
>;

export type OverlineProps = OverlineBaseProps;
