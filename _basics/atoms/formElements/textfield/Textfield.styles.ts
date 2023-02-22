import styled from 'styled-components';
import { TextfieldProps } from '@/interfaces';
import { getHelpers } from '@/utils/styled-components/helpers';

const compName = 'textfield';

const { fontSize, lineHeight, padding, color, prop, fromTheme, borderWidth } =
  getHelpers(compName);

export const StyledTextfield = styled.textarea.attrs(
  (props: TextfieldProps) => ({
    isValid: props.isValid || false,
    isTouched: props.isTouched || false,
  })
)`
  font-family: inherit;
  font-weight: normal;
  text-align: left;
  width: 100%;
  resize: vertical;
  font-size: ${(p) => fontSize(p, 'fontSize', 'sm')};
  line-height: ${(p) => lineHeight(p, 'lineHeight', 'sm')};
  color: ${(p) => color(p, 'textColor', 'darkGray')};
  background-color: ${(p) =>
    color(p, 'backgroundColor', 'secondaryBackground')};
  min-height: ${(p) => prop(p, 'minHeight', '200px')};
  height: ${(p) => prop(p, 'height', '200px')};
  border-width: ${(p) => borderWidth(p, 'borderWidth', 'sm')};
  border-style: ${(p) => prop(p, 'borderStyle', 'solid')};
  border-radius: ${(p) => fromTheme(p, 'borderRadius')};
  padding-top: ${(p) => padding(p, 'paddingTop', 'md')};
  padding-bottom: ${(p) => padding(p, 'paddingBottom', 'md')};
  padding-right: ${(p) => padding(p, 'paddingRight', 'md')};
  padding-left: ${(p) => padding(p, 'paddingLeft', 'md')};
  border-color: ${(p) => {
    if (p.isTouched) {
      if (p.isValid) {
        return p.theme.colors.success;
      }

      return p.theme.colors.error;
    }

    return color(p, 'borderColor', 'white');
  }};
  box-shadow: ${(p) => fromTheme(p, 'boxShadowInverted')};

  ::placeholder {
    color: ${(p) => color(p, 'placeholderColor', 'gray')};
  }

  ${(p) => p.theme.components?.[compName]?.style};
`;
