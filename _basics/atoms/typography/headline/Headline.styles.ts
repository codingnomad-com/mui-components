import styled from 'styled-components';
import { HeadlineProps } from '@/interfaces';
import { ThemeFontSizes } from '@/theme/themeTypes';

const fontSizeFallbacks: { [key: string]: keyof ThemeFontSizes } = {
  h1: 'xxl',
  h2: 'xl',
  h3: 'lg',
  h4: 'md',
  h5: 'sm',
  h6: 'xs',
};

const marginFallbacks: { [key: string]: string } = {
  h1: '32px 0',
  h2: '24px 0',
  h3: '16px 0',
  h4: '16px 0',
  h5: '12px 0',
  h6: '12px 0',
};

const compName = 'headline';

export const StyledHeadline = styled.h1.attrs((props: HeadlineProps) => ({
  color: props.color,
  headlineLevel: props.headlineLevel || 'h1',
  fontWeight: props.fontWeight,
  textAlign: props.textAlign,
  uppercase: props.uppercase,
  margin: props.margin,
  styleProps: props.styleProps,
}))`
  font-family: ${(p) =>
    p.theme.fontFamily[
      p.theme.components?.[compName]?.[p.headlineLevel]?.fontFamily
    ]};
  font-size: ${(p) =>
    p.theme.fontSize[
      p.theme.components?.[compName]?.[p.headlineLevel]?.fontSize ||
        fontSizeFallbacks[p.headlineLevel]
    ]};
  line-height: ${(p) =>
    p.theme.lineHeight[
      p.theme.components?.[compName]?.[p.headlineLevel]?.lineHeight ||
        fontSizeFallbacks[p.headlineLevel]
    ]};
  font-weight: ${(p) =>
    p.fontWeight ||
    p.theme.components?.[compName]?.[p.headlineLevel]?.fontWeight ||
    'bold'};
  text-align: ${(p) =>
    p.textAlign ||
    p.theme.components?.[compName]?.[p.headlineLevel]?.textAlign ||
    'left'};
  text-transform: ${(p) =>
    (p.uppercase ||
      p.theme.components?.[compName]?.[p.headlineLevel]?.uppercase) &&
    'uppercase'};
  color: ${(p) =>
    p.theme.colors[
      p.color ||
        p.theme.components?.[compName]?.[p.headlineLevel]?.color ||
        'black'
    ]};
  margin: ${(p) =>
    p.margin ||
    p.theme.components?.[compName]?.[p.headlineLevel]?.margin ||
    marginFallbacks[p.headlineLevel]};

  ${(p) => p.theme.comonents?.[compName]?.style}
`;
