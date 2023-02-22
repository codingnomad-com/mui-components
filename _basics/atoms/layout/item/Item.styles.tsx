import styled from 'styled-components';
import Media from '@basics/shared/Media';
import { ItemsPerRow, MediaVariant, ItemSize } from '@/types';
import { ItemProps } from '@/interfaces';

const calculateFlexBasis = (
  size: number | 'auto',
  itemsPerRow: ItemsPerRow,
) => {
  if (size === 'auto' || itemsPerRow === 'all') {
    return 'unset';
  }

  const calculatedWidth = Math.floor((100 / itemsPerRow) * size);
  const itemWidth = calculatedWidth > 0 ? calculatedWidth : 100;

  return `${itemWidth}%`;
};

const mediaQuery = (
  variant: MediaVariant,
  size: ItemSize,
  itemsPerRow: ItemsPerRow,
) =>
  Media[variant](`
    display: ${size === 'hidden' ? 'none' : 'flex'};
    flex-basis: ${
      size !== 'hidden' ? calculateFlexBasis(size, itemsPerRow) : '100%'
    };
    max-width: ${
      size !== 'hidden' ? calculateFlexBasis(size, itemsPerRow) : '100%'
    };
    flex-grow: ${size === 'auto' ? 0 : 1};
  `);

export const StyledItem = styled.div.attrs((props: ItemProps) => ({
  xs: props.xs || 1,
  sm: props.sm || 1,
  md: props.md || 1,
  lg: props.lg || 1,
  xl: props.xl || 1,
  itemsPerRowXs: props.itemsPerRowXs || 1,
  itemsPerRowSm: props.itemsPerRowSm || 1,
  itemsPerRowMd: props.itemsPerRowMd || 2,
  itemsPerRowLg: props.itemsPerRowLg || 6,
  itemsPerRowXl: props.itemsPerRowXl || 8,
  childrenDirection: props.childrenDirection || 'column',
  childrenAlignment: props.childrenAlignment || 'flex-start',
}))`
  align-items: stretch;
  flex-direction: ${(props) => props.childrenDirection};
  padding-top: ${(props): string =>
    props.theme?.components?.grid?.item?.paddingTop || '10px'};
  padding-bottom: ${(props): string =>
    props.theme?.components?.grid?.item?.paddingBottom || '10px'};
  padding-left: ${(props): string =>
    props.theme?.components?.grid?.item?.paddingLeft || '10px'};
  padding-right: ${(props): string =>
    props.theme?.components?.grid?.item?.paddingRight || '10px'};
  margin: ${(props): string =>
    props.theme?.components?.grid?.item?.margin || '0'};
  justify-content: ${(props) => props.childrenAlignment};

  ${(props) => mediaQuery('xs', props.xs, props.itemsPerRowXs)};
  ${(props) => mediaQuery('sm', props.sm, props.itemsPerRowSm)};
  ${(props) => mediaQuery('md', props.md, props.itemsPerRowMd)};
  ${(props) => mediaQuery('lg', props.lg, props.itemsPerRowLg)};
  ${(props) => mediaQuery('xl', props.xl, props.itemsPerRowXl)};
`;
