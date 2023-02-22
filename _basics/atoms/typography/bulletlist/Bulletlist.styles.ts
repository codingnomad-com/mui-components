import styled, { css } from 'styled-components';
import { BulletlistProps } from '@/interfaces';
import { getVariable } from '@/utils/styled-components/helpers';

export const StyledBulletlistItem = css`
  padding: 0;
  text-align: left;
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
  font-size: ${(p) => getVariable('paragraph')(p, '', 'fontSize', 'sm')};
  line-height: ${(p) => getVariable('paragraph')(p, '', 'lineHeight', 'sm')};
  margin-bottom: ${(props) =>
    props.theme.components?.bulletlist?.listItems.marginBottom || '10px'};
`;

export const StyledBoxedNumbersListItem = styled.li.attrs(
  (props: BulletlistProps) => ({
    fontColor: props.textColor || 'darkGray',
    fontWeight: props.fontWeight || 'normal',
    bulletTextColor: props.bulletTextColor || 'primary',
    bulletTextFontWeight: props.bulletTextFontWeight || 'bold',
    bulletColor: props.bulletColor || 'white',
  })
)`
  ${StyledBulletlistItem};

  color: ${(p) => p.theme.colors[p.fontColor]};
  font-weight: ${(props) => props.fontWeight};

  :before {
    counter-increment: bulletlist-counter;
    content: counter(bulletlist-counter);
    display: inline-block;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
    color: ${(props) => props.theme.colors[props.bulletTextColor]};
    background-color: ${(props) => props.theme.colors[props.bulletColor]};
    font-weight: ${(props) => props.bulletTextFontWeight};
    width: ${(p) =>
      p.theme.components?.bulletlist?.boxedNumbers?.bulletWidth || '24px'};
    height: ${(p) =>
      p.theme.components?.bulletlist?.boxedNumbers?.bulletHeight || '24px'};
    margin-right: ${(p) =>
      p.theme.components?.bulletlist?.boxedNumbers?.bulletDistance || '10px'};
    margin-left: -${(p) => p.theme.components.bulletlist?.boxedNumbers?.listItemPaddingLeft || '30px'};
    line-height: ${(p) =>
      p.theme.components?.bulletlist?.boxedNumbers?.bulletHeight || '24px'};
    border-radius: ${(p) =>
      p.theme.components?.bulletlist?.boxedNumbers?.bulletRadius || '3px'};
  }
`;

export const StyledBulletlist = css`
  padding: 0;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 20px;
  list-style: none;
`;

export const StyledBulletsListItem = styled.li.attrs(
  (props: BulletlistProps) => ({
    fontColor: props.textColor || 'black',
    fontWeight: props.fontWeight || 'normal',
    bulletColor: props.bulletColor || 'primary',
  })
)`
  ${StyledBulletlistItem};

  color: ${(p) => p.theme.colors[p.fontColor]};
  font-weight: ${(p) => p.fontWeight};

  :before {
    content: '';
    font-weight: bold;
    display: inline-block;
    vertical-align: middle;
    margin-top: 0;
    margin-bottom: 0;
    background-color: ${(p) => p.theme.colors[p.bulletColor]};
    width: ${(p) =>
      p.theme.components?.bulletlist?.bullets?.bulletSize || '6px'};
    height: ${(p) =>
      p.theme.components?.bulletlist?.bullets?.bulletSize || '6px'};
    margin-right: ${(p) =>
      p.theme.components?.bulletlist?.bullets?.bulletDistance || '12px'};
    margin-left: ${(p) =>
      p.theme.components?.bulletlist?.bullets?.bulletMarginLeft || '-18px'};
    border-radius: ${(p) =>
      p.theme.components?.bulletlist?.bullets?.bulletRadius || '0%'};
  }
`;

export const StyledIconsListItem = styled.li.attrs(
  (props: BulletlistProps) => ({
    fontColor: props.textColor || 'black',
    fontWeight: props.fontWeight || 'normal',
    iconMarginRight: props.iconMarginRight || '6px',
  })
)`
  ${StyledBulletlistItem};

  color: ${(p) => p.theme.colors[p.fontColor]};
  font-weight: ${(p) => p.fontWeight};

  & span {
    margin-left: -28.5px;
    margin-right: ${(p) => p.iconMarginRight};
    display: inline-block;
    width: '22.5px';
  }
`;

export const StyledNumbersListItem = styled.li.attrs(
  (props: BulletlistProps) => ({
    fontColor: props.textColor || 'black',
    fontWeight: props.fontWeight || 'normal',
    bulletTextColor: props.bulletTextColor || 'primary',
    bulletTextFontWeight: props.bulletTextFontWeight || 'bold',
  })
)`
  ${StyledBulletlistItem};

  color: ${(p) => p.theme.colors[p.fontColor]};
  font-weight: ${(p) => p.fontWeight};

  :before {
    counter-increment: bulletlist-counter;
    content: counter(bulletlist-counter) '.';
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    text-align: right;
    color: ${(p) => p.theme.colors[p.bulletTextColor]};
    font-weight: ${(p) => p.bulletTextFontWeight};
    width: ${(p) =>
      p.theme.components?.bulletlist?.numbers?.bulletWidth || '20px'};
    margin-right: ${(p) =>
      p.theme.components?.bulletlist?.numbers?.bulletDistance || '10px'};
    margin-left: -${(p) => p.theme.components?.bulletlist?.numbers?.listItemPaddingLeft || '30px'};
  }
`;

export const StyledOrderedList = styled.ol.attrs((props: BulletlistProps) => ({
  isLoading: !!props.isLoading,
}))`
  ${StyledBulletlist};

  margin-left: ${(p) =>
    p.theme.components?.bulletlist?.numbers?.listItemPaddingLeft || '30px'};
  counter-reset: bulletlist-counter;
`;

export const StyledUnorderedList = styled.ul.attrs(
  (props: BulletlistProps) => ({
    isLoading: !!props.isLoading,
  })
)`
  ${StyledBulletlist};

  margin-left: ${(p) =>
    p.theme.components?.bulletlist?.bullets?.listItemPaddingLeft || '30px'};
`;
