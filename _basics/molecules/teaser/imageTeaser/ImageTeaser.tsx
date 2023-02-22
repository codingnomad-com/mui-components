import React, { FC, ReactElement } from 'react';

import Headline from '@basics/atoms/typography/headline/Headline';
import Paragraph from '@basics/atoms/typography/paragraph/Paragraph';
import Textlink from '@basics/atoms/typography/links/textlink/Textlink';
import { ImageTeaserProps } from '@/interfaces';
import {
  StyledImageTeaser,
  StyledImageTeaserContent,
} from './ImageTeaser.styles';

const ImageTeaser: FC<ImageTeaserProps> = (props): ReactElement => {
  const { headlineText, text, linkText, handleClick } = props;

  return (
    <StyledImageTeaser {...props}>
      <StyledImageTeaserContent {...props}>
        <Headline headlineLevel="h4">{headlineText}</Headline>

        <Paragraph marginTop="md" marginBottom="md">
          {text}
        </Paragraph>

        <Paragraph>
          <Textlink handleClick={handleClick} underlined>
            {linkText}
          </Textlink>
        </Paragraph>
      </StyledImageTeaserContent>
    </StyledImageTeaser>
  );
};

export default ImageTeaser;
