import styled from 'styled-components';
import { FontawesomeProps } from '@/interfaces';
import { getHelpers } from '@/utils/styled-components/helpers';

const compName = 'fontawesome';

const { color } = getHelpers(compName);

export const StyledFontawesome = styled.span.attrs(
  (props: FontawesomeProps) => ({
    iconColor: props.iconColor,
  })
)`
  display: inline-block;
  & > svg {
    color: ${(p) => p.iconColor && color(p, 'iconColor', 'black')};
  }

  ${(p) => p.theme.components?.[compName]?.style};
`;
