import React, { FC, MouseEvent, ReactElement, useCallback } from 'react';

import Button from '@basics/atoms/formElements/button/Button';
import { QuickFilterProps } from '@/interfaces';
import { QuickFilterItem } from '@/types';
import { isItemSelected } from './helper';
import { StyledQuickFilter } from './QuickFilter.styles';

const QuickFilter: FC<QuickFilterProps> = (props): ReactElement => {
  const {
    activeBackgroundColor = 'primary',
    activeTextColor = 'white',
    handleClick,
    id,
    inactiveBackgroundColor = 'white',
    inactiveTextColor = 'primary',
    items,
  } = props;

  const handleClickItem = useCallback(
    (e: MouseEvent, clickedItem: QuickFilterItem) => {
      e?.preventDefault();

      const updatedItems = items.map((item) => ({
        ...item,
        selected: isItemSelected(item, clickedItem),
      }));

      if (handleClick) handleClick(updatedItems, id);
    },
    [items, id, handleClick],
  );

  return (
    <StyledQuickFilter {...props}>
      {items.map((item, key) => (
        <Button
          key={key}
          buttonLabel={item.label}
          buttonTextColor={item.selected ? activeTextColor : inactiveTextColor}
          buttonColor={
            item.selected ? activeBackgroundColor : inactiveBackgroundColor
          }
          buttonSpacing="0"
          onClick={(e) => handleClickItem(e, item)}
        />
      ))}
    </StyledQuickFilter>
  );
};

export default QuickFilter;
