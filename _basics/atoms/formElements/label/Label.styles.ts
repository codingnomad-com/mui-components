import styled from 'styled-components';
import { LabelProps } from '@/interfaces';

import { getHelpers } from '@/utils/styled-components/helpers';

const compName = 'label';

const { fontSize, margin, color } = getHelpers(compName);

export const StyledLabel = styled.label.attrs((props: LabelProps) => ({
  isValid: props.isValid,
  isTouched: props.isTouched,
  focused: props.focused,
  clickable: props.clickable,
}))`
  color: pink;
  display: block;
  width: 100%;
  font-size: ${(p) => fontSize(p, 'fontSize', 'xs')};
  line-height: ${(p) => fontSize(p, 'fontSize', 'xs')};
  margin-top: ${(p) => margin(p, 'marginTop', '0')};
  margin-right: ${(p) => margin(p, 'marginRight', '0')};
  margin-bottom: ${(p) => margin(p, 'marginBottom', 'xs')};
  margin-left: ${(p) => margin(p, 'marginLeft', '0')};
  cursor: ${(p) => p.clickable && 'pointer'};
  color: ${(p) => {
    if (p.isTouched) return color(p, '', p.isValid ? 'success' : 'error');
    if (p.focused) return color(p, '', 'link');
    return color(p, 'labelColor', 'darkGray');
  }};

  ${(p) => p.theme.components?.[compName]?.style};
`;
