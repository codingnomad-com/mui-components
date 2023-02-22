import styled from 'styled-components';
import { DefaultColor, TooltipPosition } from '@/types';
import { TooltipProps } from '@/interfaces';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getBackgroundColor = (props: any) =>
  props.theme.colors[props.backgroundColor] ||
  props.theme.components?.tooltip?.backgroundColor ||
  props.theme.colors.primary;

const getArrowBorderColor = (
  color: DefaultColor,
  position: TooltipPosition,
) => {
  if (['bottomLeft', 'bottomCenter', 'bottomRight'].includes(position)) {
    return `transparent transparent ${color} transparent`;
  }

  if (['topLeft', 'topCenter', 'topRight'].includes(position)) {
    return `${color} transparent transparent transparent`;
  }

  return 'transparent';
};

const getArrowRight = (position: TooltipPosition) => {
  const positions = {
    topRight: '14px',
    bottomRight: '14px',
  } as { [key in TooltipPosition]: string };

  return position ? positions[position] : 'auto';
};

const getArrowLeft = (position: TooltipPosition) => {
  const positions = {
    topLeft: '14px',
    bottomLeft: '14px',
    topCenter: '50%',
    bottomCenter: '50%',
  } as { [key in TooltipPosition]: string };

  return position ? positions[position] : 'auto';
};

const getArrowTop = (position: TooltipPosition) =>
  position && ['topLeft', 'topCenter', 'topRight'].includes(position)
    ? '100%'
    : 'auto';

const getArrowBottom = (position: TooltipPosition) =>
  position && ['bottomLeft', 'bottomCenter', 'bottomRight'].includes(position)
    ? '100%'
    : 'auto';

const getLeft = (position: TooltipPosition) =>
  position?.includes('Left')
    ? 0
    : position?.includes('Center')
    ? '50%'
    : 'auto';

const getRight = (position: TooltipPosition) =>
  position?.includes('Right') ? 0 : 'auto';

const getTranslate = (position: TooltipPosition) => {
  const x = position.includes('Center')
    ? '-50%'
    : position.includes('Left')
    ? '-10px'
    : '10px';
  const y = position.includes('top') ? '-10px' : '10px';

  return `translate(${x}, ${y})`;
};

export const StyledTooltip = styled.div.attrs((props: TooltipProps) => ({
  backgroundColor: props.tooltipBackgroundColor,
  color: props.tooltipColor,
  position: props.tooltipPosition,
}))`
  & {
    position: absolute;
    display: block;
    height: auto;
    width: max-content;

    background-color: ${getBackgroundColor};
    transform: ${(props) => getTranslate(props.position)};

    top: ${(props) => (props.position?.includes('bottom') ? '100%' : 'auto')};
    left: ${(props) => getLeft(props.position)};
    bottom: ${(props) => (props.position?.includes('top') ? '100%' : 'auto')};
    right: ${(props) => getRight(props.position)};

    text-align: ${(props): string =>
      props.theme.components?.tooltip?.textAlign || 'center'};
    color: ${(props): string =>
      props.theme.colors[props.color] ||
      props.theme.formElements?.tooltip?.textColor ||
      props.theme.colors.white};
    max-width: ${(props): string =>
      props.theme.components?.tooltip?.maxWidth || '200px'};
    line-height: ${(props): string =>
      props.theme.components?.tooltip?.lineHeight ||
      props.theme.lineHeight?.md};
    font-size: ${(props): string =>
      props.theme.components?.tooltip?.fontSize || props.theme.fontSize?.md};

    padding-right: ${(props): string =>
      props.theme.components?.tooltip?.paddingHorizontal || '20px'};
    padding-left: ${(props): string =>
      props.theme.components?.tooltip?.paddingHorizontal || '20px'};
    padding-top: ${(props): string =>
      props.theme.components?.tooltip?.paddingVertical || '8px'};
    padding-bottom: ${(props): string =>
      props.theme.components?.tooltip?.paddingVertical || '8px'};

    border-style: ${(props): string =>
      props.theme.components?.tooltip?.borderStyle || 'solid'};
    border-radius: ${(props): string =>
      props.theme.components?.tooltip?.borderRadius || '0px'};

    :after {
      content: ' ';
      position: absolute;
      border-width: 8px;
      border-style: solid;

      border-color: ${(props) =>
        getArrowBorderColor(getBackgroundColor(props), props.position)};

      top: ${(props) => getArrowTop(props.position)};
      left: ${(props) => getArrowLeft(props.position)};
      bottom: ${(props) => getArrowBottom(props.position)};
      right: ${(props) => getArrowRight(props.position)};

      transform: ${(props) =>
        props.position.includes('Center')
          ? 'translateX(-8px)'
          : 'translateX(0)'};
    }
  }
`;

export const StyledTooltipWrapper = styled.div.attrs(() => ({}))`
  & {
    position: relative;
  }
`;
