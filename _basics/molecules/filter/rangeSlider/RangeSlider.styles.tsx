/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';

export const StyledWrapper = styled.div.attrs(() => ({}))`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledInputsWrapper = styled.div.attrs(() => ({}))`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const StyledInput = styled.div.attrs(() => ({}))`
  display: flex;
  align-items: baseline;
  gap: 10px;
  max-width: 150px;
`;
