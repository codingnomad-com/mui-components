import React, { FC, ReactElement, useCallback, useState } from 'react';
import Fontawesome from '@basics/atoms/icons/fontawesome/Fontawesome';
import { AccordionProps } from '@/interfaces';
import {
  StyledAccordionWrapper,
  StyledAccordionItem,
  StyledTitle,
  StyledContent,
} from './Accordion.styles';

const Accordion: FC<AccordionProps> = (props): ReactElement => {
  const { items, allowMultipleOpen, defaultOpenItemId } = props;

  const [openedItems, setOpenItems] = useState<{ [k: number]: boolean }>({
    [defaultOpenItemId || '-1']: true,
  });

  const onItemClick = useCallback(
    (id: number) => {
      if (allowMultipleOpen) {
        setOpenItems({ ...openedItems, [id]: !openedItems[id] });
      } else {
        setOpenItems({ [id]: !openedItems[id] });
      }
    },
    [openedItems, allowMultipleOpen],
  );

  return (
    <StyledAccordionWrapper>
      {items.map(({ title, content }, idx) => (
        <StyledAccordionItem key={idx}>
          <StyledTitle
            isActive={openedItems[idx]}
            onClick={() => onItemClick(idx)}
          >
            {title}
            <Fontawesome
              iconName={`chevron-${openedItems[idx] ? 'down' : 'up'}`}
              iconStyle="solid"
            />
          </StyledTitle>

          <StyledContent isActive={openedItems[idx]}>{content}</StyledContent>
        </StyledAccordionItem>
      ))}
    </StyledAccordionWrapper>
  );
};

export default Accordion;
