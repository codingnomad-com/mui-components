import styled from 'styled-components';
import { SelectProps } from '@/interfaces';
import { getHelpers } from '@/utils/styled-components/helpers';

const compName = 'select';

const { color } = getHelpers(compName);

export const StyledSelectWrapper = styled.div.attrs((props: SelectProps) => ({
  labelColor: props.selectLabelColor,
}))`
  min-width: 250px;

  & > label {
    color: ${(p) => color(p, 'labelTextColor', 'darkGray')};
  }

  ${(p) => p.theme.components?.[compName]?.style};
`;
