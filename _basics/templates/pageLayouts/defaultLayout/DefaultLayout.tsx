import React, { FC, ReactElement } from 'react';
import Grid from '@basics/atoms/layout/grid/Grid';
import Container from '@basics/atoms/layout/container/Container';
import Item from '@basics/atoms/layout/item/Item';

import { DefaultLayoutProps } from '@/interfaces';

const DefaultLayout: FC<DefaultLayoutProps> = (props): ReactElement => {
  const { content } = props;

  return (
    <Grid>
      <Container>
        <Item>{content}</Item>
      </Container>
    </Grid>
  );
};

export default DefaultLayout;
