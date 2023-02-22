import styled from 'styled-components';

export const StyledAccordionWrapper = styled.div``;

export const StyledAccordionItem = styled.div`
  border-bottom: 1px solid #dddddd;
`;

export const StyledTitle = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 20px 10px;
  ${(props) =>
    props.isActive &&
    `font-weight: bold; color: ${props.theme.colors.primary}`};
`;

export const StyledContent = styled.div<{ isActive: boolean }>`
  display: none;

  ${(props) => props.isActive && `display: block;`};
`;
