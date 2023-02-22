import React, { FC, ReactElement } from 'react';
import Grid from '@basics/atoms/layout/grid/Grid';
import Container from '@basics/atoms/layout/container/Container';
import Item from '@basics/atoms/layout/item/Item';
import { SubNavigationProps } from '@/interfaces';

import {
  StyledSubNavigation,
  StyledSubNavigationItem,
} from './SubNavigation.styles';

const SubNavigation: FC<SubNavigationProps> = (props): ReactElement => {
  const { subNavigationItems, subNavigationGridBackgroundColor } = props;

  return (
    <Grid
      fullWidth
      gridBackgroundColor={subNavigationGridBackgroundColor || 'secondary'}
    >
      <Container>
        <Item>
          <Grid>
            <Container
              itemsPerRowXs="all"
              itemsPerRowSm="all"
              itemsPerRowMd="all"
              itemsPerRowLg="all"
              itemsPerRowXl="all"
            >
              <Item>
                <StyledSubNavigation {...props}>
                  {subNavigationItems.map(({ title, link }, key) => (
                    <StyledSubNavigationItem href={link} key={key} {...props}>
                      {title}
                    </StyledSubNavigationItem>
                  ))}
                </StyledSubNavigation>
              </Item>
            </Container>
          </Grid>
        </Item>
      </Container>
    </Grid>
  );
};

export default SubNavigation;
