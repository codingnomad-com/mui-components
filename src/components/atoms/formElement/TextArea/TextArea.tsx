import MuiTextArea from '@mui/material/TextField';
import { FC } from 'react';
import { TextAreaProps } from './interfaces/TextAreaProps';

export const TextArea: FC<TextAreaProps> = (props) => {
  const { ...rest } = props;

  return <MuiTextArea multiline {...rest} />;
};

export default TextArea;
