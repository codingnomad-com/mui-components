import React, { FC, ReactElement, useState } from 'react';

import Fontawesome from '@basics/atoms/icons/fontawesome/Fontawesome';
import Textlink from '@basics/atoms/typography/links/textlink/Textlink';
import { SortDirection } from '@/types';
import { TableProps } from '@/interfaces';

import {
  StyledFooterTableData,
  StyledTable,
  StyledTableBody,
  StyledTableData,
  StyledTableFooter,
  StyledTableHead,
  StyledTableHeader,
  StyledTableRow,
} from './Table.styles';

const Table: FC<TableProps> = (props): ReactElement => {
  const {
    tableData,
    tableColumns,
    handleSortTable,
    handleClickRow,
    tableHeaderTextColor,
    showFooter = true,
  } = props;

  const [sortDir, setSortDir] = useState<SortDirection>('asc');

  const handleSort = (columnId: string) => {
    if (handleSortTable) {
      handleSortTable(columnId, sortDir === 'asc' ? 'desc' : 'asc');

      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    }
  };

  const updatedTableData = tableData.map((row) => ({
    ...row,
    items: row.items.map((field, columnIndex) => ({
      ...field,
      align: tableColumns[columnIndex]?.dataAlign || 'left',
      isHighlighted: field.isHighlighted,
    })),
  }));

  return (
    <StyledTable {...props}>
      <StyledTableHead {...props}>
        <StyledTableRow {...props}>
          {tableColumns.map((column, key) => (
            <StyledTableHeader
              key={key}
              onClick={() => handleSort(column.id)}
              {...props}
              textAlign={column.headerAlign}
            >
              <div style={{ display: 'flex' }}>
                {column.label}

                {column.sortable && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      position: 'relative',
                      marginTop: -5,
                    }}
                  >
                    <Fontawesome
                      iconStyle="solid"
                      iconColor={tableHeaderTextColor}
                      iconName="sort-up"
                      iconSize="tiny"
                      style={{ fontSize: 20 }}
                    />

                    <Fontawesome
                      iconStyle="solid"
                      iconColor={tableHeaderTextColor}
                      iconName="sort-down"
                      iconSize="tiny"
                      style={{ fontSize: 20, position: 'absolute', left: 0 }}
                    />
                  </div>
                )}
              </div>
            </StyledTableHeader>
          ))}
        </StyledTableRow>
      </StyledTableHead>

      <StyledTableBody {...props}>
        {updatedTableData.map((row, rowIndex) => (
          <StyledTableRow
            key={rowIndex}
            onClick={() => handleClickRow && handleClickRow(rowIndex)}
            {...props}
          >
            {row.items.map((item, columnIndex) => (
              <StyledTableData
                key={columnIndex}
                {...props}
                textAlign={item.align}
                data-ishighlighted={item.isHighlighted}
                data-isdisabled={row.isDisabled}
              >
                {item.link ? (
                  <Textlink href={item.link} target={item.target}>
                    {item.value}
                  </Textlink>
                ) : (
                  item.value
                )}
              </StyledTableData>
            ))}
          </StyledTableRow>
        ))}
      </StyledTableBody>

      {showFooter && (
        <StyledTableFooter {...props}>
          <StyledTableRow {...props}>
            {tableColumns.map((column, columnIndex) => (
              <StyledFooterTableData
                key={columnIndex}
                {...props}
                textAlign={column.footerAlign}
              >
                {column.sum || ''}
              </StyledFooterTableData>
            ))}
          </StyledTableRow>
        </StyledTableFooter>
      )}
    </StyledTable>
  );
};

export default Table;
