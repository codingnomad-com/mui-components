/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import { TabsProps } from '@/interfaces';

export const StyledTabs = styled.div.attrs((props: TabsProps) => ({
  borderColor: props.borderColor,
  buttonSpacing: props.buttonSpacing,
}))`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  flex-wrap: wrap;
  border-radius: ${(props) =>
    props.theme.components?.button?.borderRadius || '4px'};

  & > * {
    flex-grow: 1;
    margin-bottom: ${(props) => props.buttonSpacing};
  }
`;
