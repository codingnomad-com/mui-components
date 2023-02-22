import React, { FC, ReactElement } from 'react';
import Container from '@basics/atoms/layout/container/Container';
import Item from '@basics/atoms/layout/item/Item';

import { SingleColumnProps } from '@/interfaces';
import { StyledSingleColumn } from './SingleColumn.styles';

const SingleColumn: FC<SingleColumnProps> = (props): ReactElement => {
  const { children } = props;

  return (
    <StyledSingleColumn>
      <Container>
        <Item>{children}</Item>
      </Container>
    </StyledSingleColumn>
  );
};

export default SingleColumn;
