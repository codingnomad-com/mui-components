import React, { FC, ReactElement, useState } from 'react';

import Hidden from '@basics/shared/layout/hidden/Hidden';
import { TooltipProps } from '@/interfaces';
import { StyledTooltip, StyledTooltipWrapper } from './Tooltip.styles';

const Tooltip: FC<TooltipProps> = (props): ReactElement => {
  const { children, tooltipText } = props;

  const [tooltipHidden, setTooltipHidden] = useState(false);

  const handleMouseEnter = () => setTooltipHidden(false);

  const handleMouseLeave = () => setTooltipHidden(true);

  return (
    <StyledTooltipWrapper
      {...props}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      <Hidden hidden={tooltipHidden}>
        <StyledTooltip {...props}>{tooltipText}</StyledTooltip>
      </Hidden>
    </StyledTooltipWrapper>
  );
};

export default Tooltip;
