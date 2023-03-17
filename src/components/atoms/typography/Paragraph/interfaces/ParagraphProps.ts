import { TypographyProps as MuiParagraphProps } from '@mui/material/Typography';

type ParagraphBaseProps = Pick<
  MuiParagraphProps,
  'align' | 'children' | 'gutterBottom' | 'noWrap'
>;

export type ParagraphProps = ParagraphBaseProps;
