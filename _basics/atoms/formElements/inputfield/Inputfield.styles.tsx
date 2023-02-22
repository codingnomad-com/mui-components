import styled from 'styled-components';
import { InputfieldProps } from '@/interfaces';

import { getHelpers } from '@/utils/styled-components/helpers';

const compName = 'inputfield';

const { fontSize, lineHeight, fromTheme, padding, color, prop } =
  getHelpers(compName);

export const StyledInputfield = styled.input.attrs(
  (props: InputfieldProps) => ({
    icon: props.icon,
    isTouched: props.isTouched,
    isValid: props.isValid,
    hasValidation: props.hasValidation,
    fieldTextColor: props.fieldTextColor,
    textAlign: props.textAlign,
  }),
)`
  border: none;
  font-weight: normal;
  width: 100%;
  text-align: ${(p) => prop(p, 'textAlign', 'left')};
  padding-top: ${(p) => padding(p, 'paddingTop', '0')};
  padding-right: ${(p) =>
    p.icon
      ? padding(p, 'paddingRightWithIcon', 'lg')
      : padding(p, 'paddingRight', 'md')};
  padding-bottom: ${(p) => padding(p, 'paddingBottom', '0')};
  padding-left: ${(p) => padding(p, 'paddingLeft', 'xl')};
  font-size: ${(p) => fontSize(p, 'fontSize', 'sm')};
  line-height: ${(p) => lineHeight(p, 'lineHeight', 'xl')};
  height: ${(p) => prop(p, 'height', '60px')};
  border-radius: ${(p) => fromTheme(p, 'borderRadius')};
  box-shadow: ${(p) => fromTheme(p, 'boxShadowInverted')};
  color: ${(p) => color(p, 'fieldTextColor', 'darkGray')};

  border-color: ${(p) => {
    if (p.isTouched && p.hasValidation)
      return color(p, '', p.isValid ? 'success' : 'error');

    return color(p, 'borderColor', 'white');
  }};

  :focus {
    border-color: ${(p) => color(p, '', 'link')};
  }

  :disabled {
    cursor: not-allowed;
  }

  ::placeholder {
    font-weight: ${(p) => prop(p, 'fontWeight', 'lighter')};
  }

  ${(p) => p.theme.components?.[compName]?.style};
`;

export const StyledInputFieldIcon = styled.div.attrs(() => ({}))`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(0%, -50%);
`;
