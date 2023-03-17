import { TypographyProps as MuiCaptionProps } from '@mui/material/Typography';

type CaptionBaseProps = Pick<
  MuiCaptionProps,
  'align' | 'children' | 'gutterBottom' | 'noWrap'
>;

export type CaptionProps = CaptionBaseProps;
