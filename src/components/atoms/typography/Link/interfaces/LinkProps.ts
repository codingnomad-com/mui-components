import { LinkProps as MuiLinkProps } from '@mui/material/Link';

type LinkBaseProps = Pick<
  MuiLinkProps,
  | 'align'
  | 'gutterBottom'
  | 'color'
  | 'noWrap'
  | 'ref'
  | 'underline'
  | 'variant'
>;

export interface LinkProps extends LinkBaseProps {
  text: string;
}
