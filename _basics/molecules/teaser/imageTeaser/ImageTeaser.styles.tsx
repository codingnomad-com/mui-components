/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import { ImageTeaserProps } from '@/interfaces';

export const StyledImageTeaser = styled.div.attrs(
  (props: ImageTeaserProps) => ({
    width: props.width,
    height: props.height,
    backgroundImageUrl: props.backgroundImageUrl,
    backgroundColor: props.backgroundColor,
    opacity: props.backgroundImageOpacity,
  }),
)`
  & {
    position: relative;
    width: ${(props) =>
      props.width || props.theme.components?.imageTeaser?.width || '600px'};
    height: ${(props) =>
      props.height || props.theme.components?.imageTeaser?.height || '300px'};

    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: ${(props) =>
        props.opacity ||
        props.theme.components?.imageTeaser?.backgroundImageOpacity ||
        0.6};
      z-index: -1;
      background-image: ${(props) => `url("${props.backgroundImageUrl}")`};
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
      background-color: ${(props) =>
        props.theme.colors[
          props.backgroundColor ||
            props.theme.components?.imageTeaser?.backgroundColor ||
            'gray'
        ]};
    }
  }
`;

export const StyledImageTeaserContent = styled.div.attrs(
  (props: ImageTeaserProps) => ({
    top: props.contentTop,
    right: props.contentRight,
    bottom: props.contentBottom,
    left: props.contentLeft,
    opacity: props.contentOpacity,
    width: props.contentWidth,
    maxWidth: props.contentMaxWidth,
  }),
)`
  & {
    position: absolute;
    background-color: ${(props) =>
      props.theme.colors[
        props.theme.components?.imageTeaser?.contentBackgroundColor || 'white'
      ]};
    top: ${(props) =>
      props.top || props.theme.components?.imageTeaser?.contentTop || '16px'};
    right: ${(props) =>
      props.right ||
      props.theme.components?.imageTeaser?.contentRight ||
      '16px'};
    bottom: ${(props) =>
      props.bottom ||
      props.theme.components?.imageTeaser?.contentBottom ||
      'unset'};
    left: ${(props) =>
      props.left || props.theme.components?.imageTeaser?.left || 'unset'};
    opacity: ${(props) =>
      props.opacity ||
      props.theme.components?.imageTeaser?.contentOpacity ||
      1};
    padding: ${(props) =>
      props.theme.components?.imageTeaser?.contentPadding || '16px'};
    max-width: ${(props) => props.maxWidth || 'calc(100% - 64px)'};
  }
`;
