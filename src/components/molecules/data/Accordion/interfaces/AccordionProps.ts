import { AccordionProps as MuiAccordionProps } from '@mui/material/Accordion';
import { ReactElement } from 'react';

type AccordionBaseProps = Pick<
  MuiAccordionProps,
  'defaultExpanded' | 'disabled' | 'disableGutters' | 'expanded' | 'onChange'
>;

export interface AccordionProps extends AccordionBaseProps {
  children: ReactElement;
}
