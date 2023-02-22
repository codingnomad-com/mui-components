import React, { FC, ReactElement } from 'react';
import Hidden from '@basics/shared/layout/hidden/Hidden';
import { InterfererProps } from '@/interfaces';
import { StyledInterferer, StyledInterfererWrapper } from './Interferer.styles';

const Interferer: FC<InterfererProps> = (props): ReactElement => {
  const { children, interfererHidden, interfererLabel } = props;

  return (
    <StyledInterfererWrapper>
      {children}

      <Hidden hidden={interfererHidden}>
        <StyledInterferer {...props}>{interfererLabel}</StyledInterferer>
      </Hidden>
    </StyledInterfererWrapper>
  );
};

export default Interferer;
