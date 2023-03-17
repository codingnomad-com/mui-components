import MuiAccordion from '@mui/material/Accordion';
import { FC } from 'react';
import { AccordionProps } from './interfaces/AccordionProps';

export const Accordion: FC<AccordionProps> = (props) => {
  const { children, ...rest } = props;

  return <MuiAccordion {...rest}>{children}</MuiAccordion>;
};

export default Accordion;
