import MuiTooltip from '@mui/material/Tooltip';
import { FC } from 'react';
import { TooltipProps } from './interfaces/TooltipProps';

export const Tooltip: FC<TooltipProps> = (props) => {
  const { children, ...rest } = props;

  return <MuiTooltip {...rest}>{children}</MuiTooltip>;
};

export default Tooltip;
