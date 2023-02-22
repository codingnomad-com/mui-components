/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';

const maxWidth = '808px';

export const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px;
`;

export const StyledLoginFormInput = styled.div`
  max-width: ${maxWidth};
  width: 100%;
  margin-bottom: 32px;
`;

export const StyledLoginFormCTAWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${maxWidth};
  width: 100%;
`;
