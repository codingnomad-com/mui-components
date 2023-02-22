import React, { FC, ReactElement } from 'react';

import Container from '@basics/atoms/layout/container/Container';
import Item from '@basics/atoms/layout/item/Item';
import { TwoColumnsProps } from '@/interfaces';
import { StyledTwoColumns } from './TwoColumns.styles';

const TwoColumns: FC<TwoColumnsProps> = (props): ReactElement => {
  const {
    columnsRatio = '3:1',
    leftColumnChildren,
    rightColumnChildren,
  } = props;

  const columnsWidths = columnsRatio
    .split(':')
    .map((ratio: string) => parseInt(ratio));

  const itemsPerRow = columnsWidths.reduce((a: number, b: number) => a + b, 0);

  return (
    <StyledTwoColumns>
      <Container
        itemsPerRowXs={1}
        itemsPerRowSm={1}
        itemsPerRowMd={2}
        itemsPerRowLg={itemsPerRow}
        itemsPerRowXl={itemsPerRow}
      >
        <Item xs={1} sm={1} md={1} lg={columnsWidths[0]} xl={columnsWidths[0]}>
          {leftColumnChildren}
        </Item>

        <Item xs={1} sm={1} md={1} lg={columnsWidths[1]} xl={columnsWidths[1]}>
          {rightColumnChildren}
        </Item>
      </Container>
    </StyledTwoColumns>
  );
};

export default TwoColumns;
