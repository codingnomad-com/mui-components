import React, { FC, ReactElement } from 'react';

import Container from '@basics/atoms/layout/container/Container';
import Grid from '@basics/atoms/layout/grid/Grid';
import Item from '@basics/atoms/layout/item/Item';
import Button from '@basics/atoms/formElements/button/Button';
import { BacklinkProps } from '@/interfaces';
import { StyledBacklink } from './Backlink.styles';

const Backlink: FC<BacklinkProps> = (props): ReactElement => {
  const {
    link,
    buttonBorderColor,
    buttonColor,
    buttonLabel,
    buttonSize,
    buttonSpacing,
    buttonTextColor,
    iconName,
    iconStyle,
    backlinkBackgroundColor,
    onClick,
  } = props;

  return (
    <Grid
      fullWidth
      gridBackgroundColor={backlinkBackgroundColor || 'transparent'}
    >
      <Container>
        <Item>
          <StyledBacklink>
            <Button
              iconSpacing="0"
              iconPosition="left"
              buttonBorderColor={buttonBorderColor || 'transparent'}
              buttonBorderRadius="0px"
              buttonColor={buttonColor || 'transparent'}
              buttonLabel={buttonLabel || 'zurück'}
              buttonHref={link || '/'}
              buttonSize={buttonSize || 'small'}
              buttonSpacing={buttonSpacing || '0'}
              buttonTextColor={buttonTextColor || 'primary'}
              iconName={iconName || 'angle-left'}
              iconStyle={iconStyle || 'light'}
              onClick={onClick}
            />
          </StyledBacklink>
        </Item>
      </Container>
    </Grid>
  );
};

export default Backlink;
