/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import { QuickFilterProps } from '@/interfaces';

export const StyledQuickFilter = styled.div.attrs(
  (props: QuickFilterProps) => ({
    horizontalSpacing: props.horizontalSpacing || '10px',
    verticalSpacing: props.verticalSpacing || '10px',
  }),
)`
  & {
    display: flex;
    flex-wrap: wrap;
    column-gap: ${(props) => props.horizontalSpacing};
    row-gap: ${(props) => props.verticalSpacing};
  }
`;
