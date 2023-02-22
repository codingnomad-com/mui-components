/* eslint-disable @typescript-eslint/naming-convention */
import React, { FC } from 'react';

import { ParagraphProps } from '@/interfaces';
import { StyledParagraph } from './Paragraph.styles';

const Paragraph: FC<ParagraphProps> = (props) => {
  const { children, asPlainText, ...rest } = props;

  if (asPlainText) {
    return (
      <StyledParagraph
        {...rest}
        dangerouslySetInnerHTML={{ __html: children as string }}
      />
    );
  }

  return <StyledParagraph {...rest}>{children}</StyledParagraph>;
};

export default Paragraph;
