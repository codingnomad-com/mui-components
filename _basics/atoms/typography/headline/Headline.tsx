import slugify from 'limax';
import React, { FC, ReactElement } from 'react';

import { HeadlineProps } from '@/interfaces';
import { StyledHeadline } from './Headline.styles';

const Headline: FC<HeadlineProps> = (props): ReactElement => {
  const { headlineLevel, headlineId, children } = props;

  return (
    <StyledHeadline
      {...props}
      as={headlineLevel}
      id={headlineId && slugify(headlineId)}
    >
      {children}
    </StyledHeadline>
  );
};

export default Headline;
