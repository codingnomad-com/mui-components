/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';

interface StyledFilterProps {
  noBorder?: boolean;
}
interface StyledFilterRowProps {
  justifyContent: string;
}

export const StyledFilter = styled.form.attrs((props: StyledFilterProps) => ({
  noBorder: props.noBorder,
}))`
  width: 100%;
  padding: 15px;
  border: ${(props) => (props.noBorder ? 'none' : '1px solid lightgrey')};
  border-radius: 4px;
  display: inline-flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledFilterRow = styled.div.attrs(
  (props: StyledFilterRowProps) => ({
    justifyContent: props.justifyContent,
  }),
)`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  flex-wrap: wrap;
  gap: 20px;
`;

export const StyledResetButton = styled.div`
  align-self: flex-end;
`;

export const StyledCtaWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;
