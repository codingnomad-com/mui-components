import React, { FC, ReactElement } from 'react';

import Fontawesome from '@basics/atoms/icons/fontawesome/Fontawesome';
import Textlink from '@basics/atoms/typography/links/textlink/Textlink';
import Paragraph from '@basics/atoms/typography/paragraph/Paragraph';
import { BulletlistProps } from '@/interfaces';
import {
  StyledBoxedNumbersListItem,
  StyledBulletsListItem,
  StyledIconsListItem,
  StyledNumbersListItem,
  StyledOrderedList,
  StyledUnorderedList,
} from './Bulletlist.styles';

const Bulletlist: FC<BulletlistProps> = (props): ReactElement | null => {
  const { bulletType, items, bulletIconName, bulletIconStyle } = props;

  if (items && items.length > 0) {
    if (bulletType === 'bullets') {
      return (
        <StyledUnorderedList {...props}>
          {items.map(({ text, handleClick }, index: number) => (
            <StyledBulletsListItem
              {...props}
              key={index}
              onClick={() => handleClick && handleClick()}
            >
              <Paragraph asPlainText>{text}</Paragraph>
            </StyledBulletsListItem>
          ))}
        </StyledUnorderedList>
      );
    }

    if (bulletType === 'numbers') {
      return (
        <StyledOrderedList {...props}>
          {items.map(({ text, handleClick }, index: number) => (
            <StyledNumbersListItem
              {...props}
              key={index}
              onClick={() => handleClick && handleClick()}
            >
              <Paragraph asPlainText>{text}</Paragraph>
            </StyledNumbersListItem>
          ))}
        </StyledOrderedList>
      );
    }

    if (bulletType === 'boxedNumbers') {
      return (
        <StyledOrderedList {...props}>
          {items.map(({ text, handleClick }, index: number) => (
            <StyledBoxedNumbersListItem
              {...props}
              key={index}
              onClick={() => handleClick && handleClick()}
            >
              <Paragraph asPlainText>{text}</Paragraph>
            </StyledBoxedNumbersListItem>
          ))}
        </StyledOrderedList>
      );
    }

    if (bulletType === 'icons') {
      return (
        <StyledUnorderedList {...props}>
          {items.map(({ iconName, text, href, handleClick }, index: number) => (
            <StyledIconsListItem
              {...props}
              key={index}
              onClick={() => handleClick && handleClick()}
            >
              <Fontawesome
                iconName={iconName || bulletIconName || 'dot-circle'}
                iconStyle={bulletIconStyle || 'solid'}
              />

              {href && (
                <Textlink href={href} target="_blank">
                  {text}
                </Textlink>
              )}

              {!href && <Paragraph asPlainText>{text}</Paragraph>}
            </StyledIconsListItem>
          ))}
        </StyledUnorderedList>
      );
    }
  }

  return null;
};

export default Bulletlist;
