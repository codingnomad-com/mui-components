import styled from 'styled-components';

import { FooterNavigationProps } from '@/interfaces';
import { getHelpers } from '@/utils/styled-components/helpers';

const compName = 'footerNavigation';

const { fontSize, color, prop } = getHelpers(compName);

export const StyledFooterNavigation = styled.div.attrs(() => ({}))`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;
  font-weight: bold;
  font-size: ${(p) => fontSize(p, 'fontSize', 'sm')};
`;

export const StyledFooterNavigationItem = styled.a.attrs(
  (props: FooterNavigationProps) => ({
    highlightActiveItem: props.highlightActiveItem,
  })
)`
  font-weight: normal;
  flex-basis: 45%;
  text-decoration: ${(p) => (prop(p, 'underlined') ? 'underlined' : 'none')};
  color: ${(p) =>
    p['data-is-active'] && p.highlightActiveItem
      ? color(p, 'activeColor', 'primaryBackground')
      : color(p, 'color', 'white')};

  :hover {
    opacity: 0.7;
  }
`;
