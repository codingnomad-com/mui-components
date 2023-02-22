/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import { PaginationProps } from '@/interfaces';

const getAlignment = (props: PaginationProps) => {
  if (props.paginationAlignment === 'left') {
    return 'flex-start';
  }

  if (props.paginationAlignment === 'right') {
    return 'flex-end';
  }

  return 'center';
};

const getMarginHorizontal = (props: any) =>
  `-${
    props.buttonSpacing ||
    props.theme.components?.button?.marginHorizontal ||
    '10px'
  };`;

export const StyledPagination = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: ${getAlignment};
  ${(props: PaginationProps) =>
    props?.margin
      ? `margin: ${props.margin}`
      : `margin-right: ${getMarginHorizontal};
margin-left: ${getMarginHorizontal};`}
`;
