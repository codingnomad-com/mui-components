import styled from 'styled-components';

import { SubNavigationProps } from '@/interfaces';

export const StyledSubNavigation = styled.div.attrs(() => ({}))`
  & {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-size: ${(props) =>
      props.theme.components?.subNavigation?.fontSize || '16px'};
    font-family: ${(props): string =>
      props.theme.components?.subNavigation?.fontFamily};
  }
`;

export const StyledSubNavigationItem = styled.a.attrs(
  (props: SubNavigationProps) => ({
    highlightActiveItem: props.highlightActiveItem,
  })
)`
  & {
    flex-grow: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: ${(props) =>
      props.theme.components?.subNavigation?.fontWeight || 'bold'};
    text-decoration: ${(props) =>
      props.theme.components?.subNavigation?.underlined ? 'underline' : 'none'};
    color: ${(props) =>
      props['data-is-active'] && props.highlightActiveItem
        ? props.theme.colors[
            props.theme.components?.subNavigation?.colorActive || 'white'
          ]
        : props.theme.colors[
            props.theme.components?.subNavigation?.textColor || 'white'
          ]};
    margin-right: ${(props): string =>
      props.theme.components?.subNavigation?.marginHorizontal || '20px'};
    margin-left: ${(props): string =>
      props.theme.components?.subNavigation?.marginHorizontal || '20px'};
    margin-top: ${(props): string =>
      props.theme.components?.subNavigation?.marginVertical || '8px'};
    margin-bottom: ${(props): string =>
      props.theme.components?.subNavigation?.marginVertical || '8px'};

    :hover {
      opacity: 0.7;
    }
  }
`;
