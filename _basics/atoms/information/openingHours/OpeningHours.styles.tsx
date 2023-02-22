import styled from 'styled-components';

import { getHelpers } from '@/utils/styled-components/helpers';

const compName = 'openingHours';

const { margin } = getHelpers(compName);

export const StyledOpeningHours = styled.div.attrs(() => ({}))``;

export const StyledOpeningHoursRow = styled.div`
  display: flex;
  justify-content: space-between;

  & > div:first-of-type {
    margin-right: ${(p) => margin(p, '', 'md')};
  }

  ${(p) => p.theme.components?.[compName]?.style};
`;
