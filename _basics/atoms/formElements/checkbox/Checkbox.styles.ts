import styled from 'styled-components';

import { CheckboxProps } from '@/interfaces';
import { getHelpers } from '@/utils/styled-components/helpers';

const compName = 'checkbox';

const { margin } = getHelpers(compName);

export const StyledCheckbox = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  margin: unset;
  margin-right: ${(p) => margin(p, 'marginRight', 'sm')};
`;

export const StyledCheckboxContainer = styled.div.attrs(() => ({}))`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  margin-top: ${(p) => margin(p, 'marginTop', 'xs')};
  margin-right: ${(p) => margin(p, 'marginRight', 'xs')};
  margin-bottom: ${(p) => margin(p, 'marginBottom', 'xs')};
  margin-left: ${(p) => margin(p, 'marginLeft', 'xs')};
`;

export const StyledCheckboxGroupWrapper = styled.div.attrs(
  (props: CheckboxProps) => ({
    showError: props.isTouched && !props.isValid,
  })
)`
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;
  border-bottom: ${(p) => `1px solid ${p.showError ? 'red' : 'grey'}`};
  border-style: ${(p) => `${p.showError ? 'solid' : 'hidden'}`};

  ${(p) => p.theme.components?.[compName]?.style};
`;
