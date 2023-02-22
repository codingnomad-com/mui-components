import styled from 'styled-components';
import { ContainerProps } from '@/interfaces';

const horizontalMargin = (margin: string) => (margin ? `-${margin}` : '0');

const blockWidth = (paddingLeft = '10px', paddingRight = '10px') => {
  const cleanedPaddingLeft = parseInt(paddingLeft);
  const cleanedPaddingRight = parseInt(paddingRight);
  const paddingsSum = cleanedPaddingLeft + cleanedPaddingRight;
  if (paddingsSum) {
    return `calc(100% + ${cleanedPaddingLeft + cleanedPaddingRight}px)`;
  }

  return '100%';
};

export const StyledContainer = styled.section.attrs(
  (props: ContainerProps) => ({
    flexDirection: props.flexDirection || 'row',
    justifyContent: props.justifyContent || 'flex-start',
    alignItems: props.alignItems || 'flex-start',
  }),
)`
  display: flex;
  flex-wrap: wrap;
  width: ${(props) =>
    blockWidth(
      props.theme?.components?.grid?.item?.paddingLeft,
      props.theme?.components?.grid?.item?.paddingRight,
    )};
  max-width: 100vw;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  margin-left: ${(props): string =>
    horizontalMargin(
      props.theme?.components?.grid?.item?.paddingLeft || '10px',
    )};
  margin-right: ${(props): string =>
    horizontalMargin(
      props.theme?.components?.grid?.item?.paddingRight || '10px',
    )};
`;
