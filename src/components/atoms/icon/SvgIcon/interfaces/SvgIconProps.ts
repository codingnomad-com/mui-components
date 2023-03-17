import { SvgIconProps as MuiSvgIconProps } from '@mui/material/SvgIcon';

type SvgIconBaseProps = Pick<
  MuiSvgIconProps,
  | 'color'
  | 'children'
  | 'fontSize'
  | 'htmlColor'
  | 'inheritViewBox'
  | 'viewBox'
  | 'sx'
>;

export type SvgIconProps = SvgIconBaseProps;
