import React, { FC, ReactElement } from 'react';
import Headline from '@basics/atoms/typography/headline/Headline';
import Paragraph from '@basics/atoms/typography/paragraph/Paragraph';
import Box from '@/components/_basics/shared/layout/box/Box';
import { InfoBoxProps } from '@/interfaces';

const InfoBox: FC<InfoBoxProps> = (props): ReactElement => {
  const {
    headline,
    headlineLevel = 'h6',
    headlineColor = 'primary',
    text,
    boxProps,
  } = props;

  return (
    <Box {...boxProps}>
      {headline && (
        <Headline headlineLevel={headlineLevel} color={headlineColor}>
          {headline}
        </Headline>
      )}

      {text && <Paragraph asPlainText>{text}</Paragraph>}
    </Box>
  );
};

export default InfoBox;
