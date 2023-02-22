import styled from 'styled-components';
import { getVariable } from '@/utils/styled-components/helpers';

const compName = 'checkbox';

const [getVar] = [getVariable(compName)];

export const StyledSimpleCheckbox = styled.input`
  margin: unset;
  margin-right: ${(p) => getVar(p, 'marginRight', 'margin', 'xs')};
`;

export const StyledSimpleCheckboxContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  margin-top: ${(p) => getVar(p, 'marginTop', 'margin', 'xs')};
  margin-right: ${(p) => getVar(p, 'marginRight', 'margin', 'xs')};
  margin-bottom: ${(p) => getVar(p, 'marginBottom', 'margin', 'xs')};
  margin-left: ${(p) => getVar(p, 'marginLeft', 'margin', 'xs')};
`;
