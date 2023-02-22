/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import { GridProps } from '@/interfaces';

const getWidth = (props: any) => {
  const marginLeft = props.theme?.components?.grid?.grid?.marginLeft
    ? parseInt(props.theme?.components?.grid?.grid?.marginLeft, 10)
    : 10;
  const marginRight = props.theme?.components?.grid?.grid?.marginRight
    ? parseInt(props.theme?.components?.grid?.grid?.marginRight, 10)
    : 10;

  const marginSum = marginLeft + marginRight;
  if (marginSum === 0) {
    return `100%`;
  }

  return `calc(100% + ${marginSum}px)`;
};

export const StyledGrid = styled.div.attrs((props: GridProps) => ({
  fullWidth: props.fullWidth || false,
  gridBackgroundColor: props.gridBackgroundColor || 'transparent',
  itemAlignment: props.itemAlignment || 'center',
  styleProps: props.styleProps || '',
}))`
  display: flex;
  align-items: ${(props) => props.itemAlignment};
  flex-direction: column;
  width: ${(props) => getWidth(props)};
  margin-left: ${(props): string =>
    props.theme?.components?.grid?.grid?.marginLeft || '-10px'};
  margin-right: ${(props): string =>
    props.theme?.components?.grid?.grid?.marginRight || '-10px'};
  margin-top: ${(props): string =>
    props.theme?.components?.grid?.grid?.marginTop || '0'};
  margin-bottom: ${(props): string =>
    props.theme?.components?.grid?.grid?.marginBottom || '0'};
  background-color: ${(props): string =>
    props.gridBackgroundColor === 'transparent'
      ? 'transparent'
      : props.theme?.colors[props?.gridBackgroundColor || 'gray']};

  /* TODO: put the max-width in theme */
  & > section {
    max-width: ${(props) =>
      props.fullWidth ? '100%' : props.theme?.maxContentWidth || '1280px'};
  }
  ${(props): string => props.styleProps};
`;
