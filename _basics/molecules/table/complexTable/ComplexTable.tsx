import React, { FC } from 'react';

import Headline from '@basics/atoms/typography/headline/Headline';
import Table from '@basics/atoms/formElements/table/Table';
import Box from '@basics/shared/layout/box/Box';
import Pagination from '@basics/molecules/navigation/pagination/Pagination';
import { ComplexTableProps } from '@/interfaces';

const ComplexTable: FC<ComplexTableProps> = (props) => {
  const { headlineProps, tableProps, paginationProps, boxProps } = props;

  if (!tableProps?.tableData?.length) {
    return null;
  }

  return (
    <Box {...boxProps}>
      {headlineProps && (
        <Headline {...headlineProps}>{headlineProps.children}</Headline>
      )}

      <Table {...tableProps} />

      {paginationProps && <Pagination {...paginationProps} />}
    </Box>
  );
};

export default ComplexTable;
