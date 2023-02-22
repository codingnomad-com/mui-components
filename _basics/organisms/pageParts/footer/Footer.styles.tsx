import styled from 'styled-components';
import { mediaQuery } from '@/components/_basics/shared/Media';
import { getHelpers } from '@/utils/styled-components/helpers';

const compName = 'footer';

const { fontSize, padding, margin, color, fromTheme } = getHelpers(compName);

export const StyledFooter = styled.div.attrs(() => ({}))`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  max-width: ${(p) => fromTheme(p, 'maxContentWidth')};
  color: ${(p) => color(p, 'footerTextColor', 'white')};
  background-color: ${(p) => color(p, 'footerGridBackgroundColor', 'darkGray')};
  padding-top: ${(p) => padding(p, 'paddingTop', 'xxl')};
  padding-right: ${(p) => padding(p, 'paddingRight', 'xxl')};
  padding-bottom: ${(p) => padding(p, 'paddingBottom', 'xxl')};
  padding-left: ${(p) => padding(p, 'paddingleft', 'xxl')};
  font-size: ${(p) => fontSize(p, 'fontSize', 'sm')};

  & > * {
    margin-bottom: ${(p) => margin(p, 'itemMarginBottom', 'xl')};
    flex-basis: 30%;

    ${mediaQuery('md', 'flex-basis: 47%')}
    ${mediaQuery('sm', 'flex-basis: 100%')}
  }

  ${(p) => p.theme.components?.[compName]?.style};
`;
