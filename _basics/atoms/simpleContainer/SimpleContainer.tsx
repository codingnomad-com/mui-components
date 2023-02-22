import React, { FC } from 'react';

import { SimpleContainerProps } from '@/interfaces';
import { StyledSimpleContainer } from './SimpleContainer.styles';

const SimpleContainer: FC<SimpleContainerProps> = ({ styles, children }) => (
  <StyledSimpleContainer styles={styles}>{children}</StyledSimpleContainer>
);

export default SimpleContainer;
