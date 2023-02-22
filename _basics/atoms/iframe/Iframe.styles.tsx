import styled from 'styled-components';

const compName = 'iframe';

export const StyledIframe = styled.iframe.attrs(() => ({}))`
  width: 100%;
  height: 100%;
  border: none;

  ${(p) => p.theme.components?.[compName]?.style};
`;
