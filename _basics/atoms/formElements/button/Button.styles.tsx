/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { css } from 'styled-components';
import { ButtonProps } from '@/interfaces';
import {
  ThemeFontSizes,
  ThemeLineHeights,
  ThemePaddings,
} from '@/theme/themeTypes';
import { getHelpers } from '@/utils/styled-components/helpers';

const compName = 'button';

const { fontSize, lineHeight, margin, fromTheme, padding, color, prop } =
  getHelpers(compName);

const getIconSpacingLeft = (props: any): string => {
  if (props.iconPosition === 'right') {
    return (
      props.iconSpacing || props.theme.components?.button?.iconSpacing || '10px'
    );
  }

  return '0px';
};

const getIconSpacingRight = (props: any): string => {
  if (props.iconPosition === 'right') {
    return '0px';
  }

  return (
    props.iconSpacing || props.theme?.components?.button?.iconSpacing || '10px'
  );
};

type FallbackList = {
  fontSize: keyof ThemeFontSizes;
  lineHeight: keyof ThemeLineHeights;
  paddingTop: keyof ThemePaddings;
  paddingRight: keyof ThemePaddings;
  paddingBottom: keyof ThemePaddings;
  paddingLeft: keyof ThemePaddings;
};

const FALLBACK: {
  small: FallbackList;
  medium: FallbackList;
  large: FallbackList;
} = {
  small: {
    fontSize: 'xs',
    lineHeight: 'xs',
    paddingTop: 'md',
    paddingRight: 'md',
    paddingBottom: 'md',
    paddingLeft: 'md',
  },
  medium: {
    fontSize: 'sm',
    lineHeight: 'sm',
    paddingTop: 'lg',
    paddingRight: 'xl',
    paddingBottom: 'lg',
    paddingLeft: 'xl',
  },
  large: {
    fontSize: 'md',
    lineHeight: 'md',
    paddingTop: 'xl',
    paddingRight: 'xxl',
    paddingBottom: 'xl',
    paddingLeft: 'xxl',
  },
};

export const StyledButton = (p: any) => css`
  cursor: pointer;
  display: inline-block;
  color: ${() => color(p, 'buttonTextColor', 'white')};
  border-color: ${() => color(p, 'buttonBorderColor', 'secondary')};
  background-color: ${() => color(p, 'buttonColor', 'primary')};
  text-transform: ${() => prop(p, 'uppercase', true) && 'uppercase'};

  font-size: ${() => fontSize(p, '', FALLBACK[p?.buttonSize]?.fontSize)};
  line-height: ${() => lineHeight(p, '', FALLBACK[p?.buttonSize]?.lineHeight)};
  padding-top: ${() => padding(p, '', FALLBACK[p?.buttonSize]?.paddingTop)};
  padding-right: ${() => padding(p, '', FALLBACK[p?.buttonSize]?.paddingRight)};
  padding-bottom: ${() =>
    padding(p, '', FALLBACK[p?.buttonSize]?.paddingBottom)};
  padding-left: ${() => padding(p, '', FALLBACK[p?.buttonSize]?.paddingLeft)};
  margin-right: ${() => margin(p, 'buttonSpacing')};
  margin-left: ${() => margin(p, 'buttonSpacing')};
  border-radius: ${() => fromTheme(p, 'borderRadius')};
  border-style: ${() => prop(p, 'borderStyle', 'solid')};
  opacity: ${() => p.disabled && fromTheme(p, 'disabledOpacity')};
  width: ${() => p.buttonFullWidth && '100%'};

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    flex-direction: ${() =>
      p.iconPosition === 'right' ? 'row-reverse' : 'row'};
  }

  &:disabled {
    cursor: default;
  }

  & svg {
    margin-right: ${() => getIconSpacingRight as unknown as string};
    margin-left: ${() => getIconSpacingLeft as unknown as string};
  }

  ${() => p.theme.components?.[compName]?.style};
`;

export const StyledButtonButton = styled.button.attrs((props: ButtonProps) => ({
  buttonSize: props.buttonSize || 'medium',
}))`
  ${StyledButton}
`;

export const StyledButtonLink = styled.a.attrs((props: ButtonProps) => ({
  buttonSize: props.buttonSize || 'medium',
}))`
  ${StyledButton}

  text-decoration: none;
  font-family: 'Comic Sans MS';
  pointer-events: ${(props) => (props['data-disabled'] ? 'none' : 'auto')};
`;
