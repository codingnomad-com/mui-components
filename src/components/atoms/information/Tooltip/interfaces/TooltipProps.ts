import { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip';
import { ReactElement } from 'react';

type TooltipBaseProps = Pick<
  MuiTooltipProps,
  'arrow' | 'placement' | 'children' | 'title'
>;

export interface TooltipProps extends TooltipBaseProps {
  children: ReactElement;
}
