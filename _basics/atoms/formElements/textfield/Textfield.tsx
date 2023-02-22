import React, { FC, ReactElement } from 'react';

import { TextfieldProps } from '@/interfaces';
import { StyledTextfield } from './Textfield.styles';

const Textfield: FC<TextfieldProps> = (props): ReactElement => (
  <StyledTextfield {...props} />
);

export default Textfield;
