import React, { FC, ReactElement } from 'react';

import Headline from '@basics/atoms/typography/headline/Headline';
import Button from '@basics/atoms/formElements/button/Button';
import Paragraph from '@basics/atoms/typography/paragraph/Paragraph';
import Box from '@/components/_basics/shared/layout/box/Box';
import { TextTeaserProps } from '@/interfaces';

const TextTeaser: FC<TextTeaserProps> = (props): ReactElement => {
  const { headlineProps, paragraphProps, cta, boxProps } = props;

  return (
    <Box {...boxProps}>
      {headlineProps && (
        <Headline headlineLevel="h2" {...headlineProps}>
          {headlineProps.children}
        </Headline>
      )}

      {paragraphProps && (
        <Paragraph marginBottom="lg" {...paragraphProps}>
          {paragraphProps.children}
        </Paragraph>
      )}

      {cta && (
        <Button
          buttonColor="primary"
          buttonTextColor="white"
          buttonTarget="_blank"
          buttonLabel={cta.label}
          buttonHref={cta.href}
        />
      )}
    </Box>
  );
};

export default TextTeaser;
