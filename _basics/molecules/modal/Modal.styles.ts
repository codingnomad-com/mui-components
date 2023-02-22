import styled from 'styled-components';

export const StyledModalWrapper = styled.div`
  background: white;
  z-index: 100;
  position: fixed;
  width: 60%;
  height: auto;
  top: 50%;
  left: 50%;
  min-height: 100px;
  transform: translate(-50%, -50%);
`;

export const StyledModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
`;
