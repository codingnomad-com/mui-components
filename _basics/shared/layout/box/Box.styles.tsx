import styled from 'styled-components';
import { BoxProps } from '@/interfaces';

export const StyledBox = styled.div.attrs((props: BoxProps) => ({
  padding: props.padding,
  margin: props.margin,
  border: props.border,
  boxShadow: props.boxShadow,
  backgroundColor: props.backgroundColor,
}))`
  padding: ${(props) =>
    props.padding || props.theme.components?.box?.padding || '16px'};
  border: ${(props) =>
    props.border || props.theme.components?.box?.border || 'none'};
  box-shadow: ${(props) =>
    props.boxShadow || props.theme.components?.box?.boxShadow || 'none'};
  background-color: ${(props) =>
    props.theme.colors[
      props.backgroundColor ||
        props.theme.components?.box?.backgroundColor ||
        'white'
    ]};

  margin: ${(props) =>
    props.margin || props.theme.components?.box?.margin || '0'};
`;
