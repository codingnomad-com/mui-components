/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';

export const StyledCheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 32px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 32px;
`;

export const StyledInputsBlock = styled.div`
  margin: 32px 0;
`;

export const StyledLabelWithCheckbox = styled.div`
  display: flex;
  align-items: baseline;
`;

export const StyledCheckoutFormInput = styled.div`
  width: 100%;
  margin-bottom: 12px;
`;

export const StyledFormInputRight = styled.div`
  display: flex;
  flex-direction: column;
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
