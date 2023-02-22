import React, { FC, createContext, ReactElement } from 'react';

import { ItemsPerRow } from '@/types';
import { ContainerProps } from '@/interfaces';
import { StyledContainer } from './Container.styles';

export const ContainerContext = createContext({
  itemsPerRowXs: 1 as ItemsPerRow,
  itemsPerRowSm: 1 as ItemsPerRow,
  itemsPerRowMd: 1 as ItemsPerRow,
  itemsPerRowLg: 1 as ItemsPerRow,
  itemsPerRowXl: 1 as ItemsPerRow,
});

const Container: FC<ContainerProps> = (props): ReactElement => {
  const {
    itemsPerRowXs,
    itemsPerRowSm,
    itemsPerRowMd,
    itemsPerRowLg,
    itemsPerRowXl,
    children,
  } = props;

  return (
    <StyledContainer {...props}>
      <ContainerContext.Provider
        value={{
          itemsPerRowXs: itemsPerRowXs || 1,
          itemsPerRowSm: itemsPerRowSm || 1,
          itemsPerRowMd: itemsPerRowMd || 1,
          itemsPerRowLg: itemsPerRowLg || 1,
          itemsPerRowXl: itemsPerRowXl || 1,
        }}
      >
        {children}
      </ContainerContext.Provider>
    </StyledContainer>
  );
};

export default Container;
