import styled from 'styled-components';
import { ParagraphProps } from '@/interfaces';
import { getHelpers } from '@/utils/styled-components/helpers';

const compName = 'paragraph';

const { fontSize, lineHeight, padding, margin, color, prop } =
  getHelpers(compName);

export const StyledParagraph = styled.p.attrs((props: ParagraphProps) => ({
  fontWeight: props.fontWeight,
}))`
  font-size: ${(p) => fontSize(p, 'fontSize', 'sm')};
  font-weight: ${(p) => p.fontWeight};
  line-height: ${(p) => lineHeight(p, 'lineHeight', 'sm')};
  margin-top: ${(p) => margin(p, 'marginTop', 'sm')};
  padding: ${(p) => padding(p, 'padding', 'sm')};
  margin-bottom: ${(p) => margin(p, 'marginBottom', 'sm')};
  color: ${(p) => color(p, 'color', 'darkGray')};
  text-align: ${(p) => prop(p, 'textAlign', 'left')};
  text-transform: ${(p) => (prop(p, 'uppercase', '') ? 'uppercase' : '')};

  ${(p) => p.theme.components?.[compName]?.style};
`;
