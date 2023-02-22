import styled from 'styled-components';
import { breakpoints } from '@basics/shared/Media';

import { StyledTableDataProps, TableProps } from '@/interfaces';
import { Breakpoints } from '@/types';
import { getHelpers } from '@/utils/styled-components/helpers';

interface StyledTableProps {
  verticalScrollBreakPoint: Breakpoints;
}
const compName = 'table';
const { prop, color, lineHeight, padding, fontSize } = getHelpers(compName);

export const StyledTable = styled.table.attrs((props: StyledTableProps) => ({
  verticalScrollBreakPoint: props.verticalScrollBreakPoint,
}))`
  width: ${(p) => p.theme.components?.[compName]?.tableWidth || '100%'};
  font-family: ${(p) => p.theme.fontFamily.normal};

  border: ${(p) => prop(p, 'tableBorder', 'none')};
  margin: ${(p) => prop(p, 'tableMargin', '0')};

  @media (max-width: ${(p) =>
      breakpoints[p.verticalScrollBreakPoint || 'xs']}px) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  ${(p) => p.theme.components?.[compName]?.style};
`;

export const StyledTableHead = styled.thead.attrs(() => ({}))`
  background-color: ${(p) => color(p, 'tableHeaderBackgroundColor', 'primary')};
  font-size: ${(p) => fontSize(p, 'tableHeadlerFontSize', 'lg')};
  border-top: ${(p) => prop(p, 'tableHeaderBorderTop', 'none')};
  border-right: ${(p) => prop(p, 'tableHeaderBorderRight', 'none')};
  border-bottom: ${(p) => prop(p, 'tableHeaderBorderBottom', 'none')};
  border-left: ${(p) => prop(p, 'tableHeaderBorderLeft', 'none')};
`;

export const StyledTableHeader = styled.th.attrs(
  (props: StyledTableDataProps) => ({
    textAlign: props.textAlign || 'left',
  })
)`
  color: ${(p) => color(p, 'tableHeaderTextColor', 'white')};
  line-height: ${(p) => lineHeight(p, 'tableHeaderLineHeight', 'md')};
  padding: ${(p) => padding(p, 'tableHeaderPadding', 'xl')};
  text-align: ${(p) => p.textAlign};
  border-top: ${(p) => prop(p, 'tableHeaderBorderTop', 'none')};
  border-right: ${(p) => prop(p, 'tableHeaderBorderRight', 'none')};
  border-bottom: ${(p) => prop(p, 'tableHeaderBorderBottom', 'none')};
  border-left: ${(p) => prop(p, 'tableHeaderBorderLeft', 'none')};
`;

export const StyledTableBody = styled.tbody.attrs((props: TableProps) => ({
  backgroundColor: props.tableBackgroundColor || 'inherit',
}))`
  background-color: ${(p) =>
    !p.backgroundColor || p.backgroundColor === 'inherit'
      ? 'inherit'
      : p.theme.colors[p.backgroundColor]};
`;

export const StyledTableData = styled.td.attrs(
  (props: StyledTableDataProps) => ({
    color: props.tableTextColor,
    textAlign: props.textAlign || 'left',
    isHighlighted: props['data-ishighlighted'],
    isDisabled: props['data-isdisabled'],
  })
)`
  color: ${(p) =>
    p.isDisabled
      ? p.theme.colors?.darkGray
      : p.isHighlighted
      ? p.theme.colors.highlight
      : p.theme.colors[p.color || 'darkGray']};
  font-size: ${(p) => fontSize(p, 'tableDataFontSize', 'sm')};
  text-align: ${(p) => p.textAlign};
  padding: ${(p) => padding(p, 'tableDataPadding', 'xl')};
  line-height: ${(p) => lineHeight(p, 'tableDataLineHeight', 'md')};
  border-bottom: ${(p) =>
    prop(p, 'tableDataBorderBottom', `1px solid ${p.theme.colors.gray}`)};
  opacity: ${(p) => (p.isDisabled ? 0.5 : 1)};
`;

export const StyledTableFooter = styled.tfoot.attrs((props: TableProps) => ({
  backgroundColor: props.tableFooterBackgroundColor,
  color: props.tableFooterTextColor,
}))`
  background-color: ${(p) => color(p, 'tableFooterbackgroundColor', 'primary')};
  border-top: ${(p) => prop(p, 'tableFooterBorderTop', 'none')};
  border-right: ${(p) => prop(p, 'tableFooterBorderRight', 'none')};
  border-bottom: ${(p) => prop(p, 'tableFooterBorderBottom', 'none')};
  border-left: ${(p) => prop(p, 'tableFooterBorderLeft', 'none')};
`;

export const StyledFooterTableData = styled.td.attrs(
  (props: StyledTableDataProps) => ({
    textAlign: props.textAlign,
  })
)`
  color: ${(p) => color(p, 'tableFooterTextColor', 'white')};
  text-align: ${(p) => p.textAlign || 'left'};
  padding: ${(p) => padding(p, 'tableFooterPadding', 'md')};
  padding-left: ${(p) => padding(p, 'tableFooterPaddingLeft', 'xl')};
  font-size: ${(p) => fontSize(p, 'tableFooterFontSize', 'sm')};
  line-height: ${(p) => lineHeight(p, 'tableFooterLineHeight', 'md')};
`;

export const StyledTableRow = styled.tr.attrs(() => ({}))``;
