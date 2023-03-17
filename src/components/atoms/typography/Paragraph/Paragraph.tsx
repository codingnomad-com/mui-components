import MuiParagraph from '@mui/material/Typography';
import { FC } from 'react';
import { ParagraphProps } from './interfaces/ParagraphProps';

export const Paragraph: FC<ParagraphProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <MuiParagraph paragraph {...rest}>
      {children}
    </MuiParagraph>
  );
};

export default Paragraph;
