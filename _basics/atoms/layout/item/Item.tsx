import React, { FC, ReactElement, useContext } from 'react';
import { ItemProps } from '@/interfaces';
import { ContainerContext } from '../container/Container';
import { StyledItem } from './Item.styles';

const Item: FC<ItemProps> = (props): ReactElement => {
  const { children, xs, sm, md, lg, xl } = props;

  const containerContext = useContext(ContainerContext);

  const {
    itemsPerRowXs,
    itemsPerRowSm,
    itemsPerRowMd,
    itemsPerRowLg,
    itemsPerRowXl,
  } = containerContext;

  return (
    <StyledItem
      {...props}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      itemsPerRowXs={itemsPerRowXs}
      itemsPerRowSm={itemsPerRowSm}
      itemsPerRowMd={itemsPerRowMd}
      itemsPerRowLg={itemsPerRowLg}
      itemsPerRowXl={itemsPerRowXl}
    >
      {children}
    </StyledItem>
  );
};

export default Item;
