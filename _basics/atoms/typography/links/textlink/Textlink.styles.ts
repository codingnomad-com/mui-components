import styled from 'styled-components';
import { TextlinkProps } from '@/interfaces';
import { getHelpers } from '@/utils/styled-components/helpers';

const compName = 'textlink';

const { color, prop, lineHeight } = getHelpers(compName);

export const StyledTextlink = styled.a.attrs((props: TextlinkProps) => ({
  fontSize: props.fontSize,
  underlined: props.underlined,
}))`
  font-size: ${(p) => prop(p, 'fontSize')};
  line-height: ${(p) => lineHeight(p, 'lineHeight')};
  color: ${(p) => color(p, 'color', 'link')};
  text-decoration: ${(p) =>
    p.underlined === false ||
    p.theme.components?.[compName]?.underlined === false
      ? ''
      : 'underline'};
  cursor: pointer;

  ${(p) => p.theme.components?.[compName]?.style};
`;
