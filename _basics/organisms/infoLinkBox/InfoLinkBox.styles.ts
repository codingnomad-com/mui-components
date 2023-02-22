import styled from 'styled-components';

export const StyledInfoLinkBox = styled.div.attrs(() => ({}))`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.theme.colors[props.theme.skeleton?.general?.borderColor || 'gray']};
  padding: ${(props) => props.theme.skeleton?.general?.padding || '16px'};
`;
