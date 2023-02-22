import styled from 'styled-components';
import { getHelpers } from '@/utils/styled-components/helpers';

const compName = 'formField';

const { fontSize, margin, color } = getHelpers(compName);

export const StyledError = styled.div.attrs(() => ({}))`
  margin-top: ${(p) => margin(p, 'errorMessageMarginTop', 'xs')};
  font-size: ${(p) => fontSize(p, 'errorMessageFontSize', 'xs')};
  color: ${(p) => color(p, '', 'error')};
`;
