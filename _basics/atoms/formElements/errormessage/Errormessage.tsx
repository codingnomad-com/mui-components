import React, { FC, ReactElement } from 'react';

import { ErrormessageProps } from '@/interfaces';
import { StyledErrormessage } from './Errormessage.styles';

const Errormessage: FC<ErrormessageProps> = (props): ReactElement => {
  const { message = '' } = props;

  return <StyledErrormessage> {message}</StyledErrormessage>;
};

export default Errormessage;
