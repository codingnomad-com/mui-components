import styled from 'styled-components';
import { SimpleContainerProps } from '@/interfaces';

export const StyledSimpleContainer = styled.div`
  ${(props: SimpleContainerProps) => props.styles};
`;
