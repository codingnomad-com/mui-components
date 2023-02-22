import styled from 'styled-components';
import { getHelpers } from '@/utils/styled-components/helpers';

const compName = 'divider';

const { margin, color, borderWidth } = getHelpers(compName);

export const StyledDivider = styled.div`
  margin-top: ${(p) => margin(p, 'marginTop', 'xl')};
  margin-right: ${(p) => margin(p, 'marginRight', '0')};
  margin-bottom: ${(p) => margin(p, 'marginBottom', 'xl')};
  margin-left: ${(p) => margin(p, 'marginLeft', '0')};
  border-bottom: ${(p) => borderWidth(p, 'width', 'md')} solid
    ${(p) => color(p, 'color', 'primaryBackground')};
`;
