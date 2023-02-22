import styled from 'styled-components';

import { MainNavigationProps } from '@/interfaces';

export const StyledMainNavigation = styled.div.attrs(() => ({}))`
  & {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    font-size: ${(props) =>
      props.theme.components?.mainNavigation?.fontSize || '16px'};
    font-family: ${(props): string =>
      props.theme.components?.mainNavigation?.fontFamily};
  }
`;

export const StyledMainNavigationItem = styled.a.attrs(
  (props: MainNavigationProps) => ({
    highlightActiveItem: props.highlightActiveItem,
  })
)`
  & {
    flex-grow: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: ${(props) =>
      props.theme.components?.mainNavigation?.colorActive || 'bold'};
    text-decoration: ${(props) =>
      props.theme.components?.mainNavigation?.underlined
        ? 'underline'
        : 'none'};
    color: ${(props) =>
      props['data-is-active'] && props.highlightActiveItem
        ? props.theme.colors[
            props.theme.components?.mainNavigation?.colorActive || 'primary'
          ]
        : props.theme.colors[
            props.theme.components?.mainNavigation?.textColor || 'primary'
          ]};
    margin-right: ${(props): string =>
      props.theme.components?.mainNavigation?.marginHorizontal || '10px'};
    margin-left: ${(props): string =>
      props.theme.components?.mainNavigation?.marginHorizontal || '10px'};
    margin-top: ${(props): string =>
      props.theme.components?.mainNavigation?.marginVertical || '8px'};
    margin-bottom: ${(props): string =>
      props.theme.components?.mainNavigation?.marginVertical || '8px'};

    :hover {
      opacity: 0.7;
    }
  }
`;
