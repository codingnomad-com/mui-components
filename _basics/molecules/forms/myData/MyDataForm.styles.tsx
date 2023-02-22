/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';

export const StyledMyDataForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px;
`;

export const StyledInputsBlock = styled.div`
  margin: 32px 0;
`;

export const StyledMyDataFormInput = styled.div`
  width: 100%;
  margin-bottom: 32px;
`;

export const StyledFormInputRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 32px;
`;

export const StyledInputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & > div {
    width: 50%;

    & :first-child {
      margin-right: 16px;
    }
  }
`;
