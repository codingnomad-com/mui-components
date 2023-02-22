import styled from 'styled-components';
import { getHelpers } from '@/utils/styled-components/helpers';

const compName = 'errorMessage';

const { fontSize, lineHeight, margin, color } = getHelpers(compName);

export const StyledErrormessage = styled.span.attrs(() => ({}))`
  display: block;
  font-size: ${(p) => fontSize(p, 'fontSize', 'xs')};
  line-height: ${(p) => lineHeight(p, 'lineHeight', 'xs')};
  margin-top: ${(p) => margin(p, 'marginTop', 'xs')};
  margin-right: ${(p) => margin(p, 'marginRight', '0')};
  margin-bottom: ${(p) => margin(p, 'marginBottom', '0')};
  margin-left: ${(p) => margin(p, 'marginLeft', '0')};
  color: ${(p) => color(p, 'color', 'error')};

  ${(p) => p.theme.components?.[compName]?.style};
`;
