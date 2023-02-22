import styled from 'styled-components';

const maxWidth = '1092px';

export const StyledRegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px;
`;

export const StyledHeadlineWrapper = styled.div`
  display: flex;
  align-self: baseline;
  text-align: left;
`;

export const StyledNotificationWrapper = styled.div`
  width: 100%;
  margin-bottom: 32px;
`;

export const StyledRegistrationFormInput = styled.div`
  max-width: ${maxWidth};
  width: 100%;
  margin-bottom: 8px;
`;

export const StyledRegistrationFormCheckbox = styled.div`
  max-width: ${maxWidth};
  width: 100%;
  margin-bottom: 8px;
`;

export const StyledRegistrationFormCTAWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${maxWidth};
  width: 100%;
`;
