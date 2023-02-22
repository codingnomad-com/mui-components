import styled from 'styled-components';

export const StyledContactTileWrapper = styled.div`
  position: relative;
`;

// TODO: Make values dynamic through config
export const StyledPhoneWrapper = styled.div`
  font-size: 32px;

  a {
    text-decoration: none;
    color: unset;
    margin-right: 70px;
  }
`;

export const StyledEmailWrapper = styled.div`
  font-size: 24px;
  margin-top: 15px;

  a {
    text-decoration: none;
    color: unset;
  }
`;

export const StyledOpeningHoursWrapper = styled.div`
  margin-top: 16px;
`;
