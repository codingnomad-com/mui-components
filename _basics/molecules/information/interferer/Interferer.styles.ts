import styled from 'styled-components';
import { InterfererProps } from '@/interfaces';

export const StyledInterferer = styled.div.attrs((props: InterfererProps) => ({
  color: props.interfererTextColor || 'primary',
  backgroundColor: props.interfererBackgroundColor || 'white',
  isLoading: props.interfererIsLoading || false,
  top: props.interfererTop,
  right: props.interfererRight,
  bottom: props.interfererBottom,
  left: props.interfererLeft,
  interfererRotation: props.interfererRotation,
  textAlign: props.interfererTextAlignment,
}))`
  & {
    display: inline-block;
    position: absolute;

    transform: ${(props) =>
      props.interfererRotation
        ? `rotate(${props.interfererRotation}deg)`
        : 'none'};
    top: ${(props): string =>
      props.top || props.theme.components?.interferer?.top || '10px'};
    right: ${(props): string =>
      props.right || props.theme.components?.interferer?.right || 'auto'};
    bottom: ${(props): string =>
      props.bottom || props.theme.components?.interferer?.bottom || 'auto'};
    left: ${(props): string =>
      props.left || props.theme.components?.interferer?.left || '0px'};
    font-size: ${(props): string =>
      props.theme.components?.interferer?.fontSize || '16px'};
    font-weight: ${(props): string =>
      props.theme.components?.interferer?.fontWeight || 'normal'};
    line-height: ${(props): string =>
      props.theme.components?.interferer?.lineHeight || '24px'};
    text-align: ${(props): string =>
      props.textAlign ||
      props.theme.components?.interferer?.textAlign ||
      'inherit'};
    color: ${(props): string => props.theme.colors[props.color] || 'white'};
    background-color: ${(props): string =>
      props.theme.colors[props.backgroundColor] || 'primary'};
    padding-right: ${(props): string =>
      props.theme.components?.interferer?.paddingHorizontal || '20px'};
    padding-left: ${(props): string =>
      props.theme.components?.interferer?.paddingHorizontal || '20px'};
    padding-top: ${(props): string =>
      props.theme.components?.interferer?.paddingVertical || '8px'};
    padding-bottom: ${(props): string =>
      props.theme.components?.interferer?.paddingVertical || '8px'};
    border-radius: ${(props): string =>
      props.theme.components?.interferer?.borderRadius || '4px'};
  }
`;

export const StyledInterfererWrapper = styled.div.attrs(() => ({}))`
  & {
    position: relative;
  }
`;
