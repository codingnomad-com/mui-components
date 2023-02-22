import styled from 'styled-components';
import { ImageSliderContentPosition } from '@/types/ImageSliderContentPosition';

export const StyledImageSlider = styled.div.attrs(
  (props: { imageSliderHeight: string }) => ({
    imageSliderHeight: props.imageSliderHeight || '400px',
  }),
)`
  height: ${(props) => props.imageSliderHeight};
  max-width: 100vw;

  & .slide {
    width: 100%;
    background-position: center center;
    background-size: cover;
    position: relative;
    height: ${(props) => props.imageSliderHeight};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledImageSliderContent = styled.div.attrs(
  (props: {
    imageSliderContentBackgroundColor?: string;
    imageSliderContentPosition: ImageSliderContentPosition;
  }) => ({
    imageSliderContentBackgroundColor:
      props.imageSliderContentBackgroundColor || '#ffffff',
    imageSliderContentPosition: props.imageSliderContentPosition || 'right',
  }),
)`
  position: absolute;
  width: 50%;
  margin: 0 5%;
  padding: 40px 30px 20px;
  background-color: ${(props) => props.imageSliderContentBackgroundColor};
  ${(props) => props.imageSliderContentPosition === 'left' && 'left: 0;'};
  ${(props) => props.imageSliderContentPosition === 'right' && 'right: 0;'};
`;
