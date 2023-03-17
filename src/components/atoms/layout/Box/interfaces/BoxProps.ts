import { BoxProps as MuiBoxProps } from '@mui/material/Box';

type BoxBaseProps = Pick<MuiBoxProps, 'component' | 'sx' | 'children'>;

export type BoxProps = BoxBaseProps;
