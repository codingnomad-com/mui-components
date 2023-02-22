import styled, { keyframes } from 'styled-components';

const placeHolderShimmer = keyframes`
  0% {
    background-position: -1000px 0
  }
  100%{
    background-position: 1000px 0
  }
}`;

export const StyledLoadingBlock = styled.div.attrs({})`
  width: 100%;
  height: 100%;
  animation-duration: 1.8s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${placeHolderShimmer};
  animation-timing-function: linear;
  background: #dedede;
  background: linear-gradient(to left, #dedede 40%, #eeeeee 50%, #dedede 60%);
  background-size: 2000px 100%;
`;
