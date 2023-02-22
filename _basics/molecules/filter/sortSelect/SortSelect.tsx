import React, { FC, ReactElement } from 'react';

import FilterSelect from '@basics/molecules/filter/filterSelect/FilterSelect';
import { SortSelectProps } from '@/interfaces';

const SortSelect: FC<SortSelectProps> = (props): ReactElement => (
  <FilterSelect {...props} type="filterSelect" />
);

export default SortSelect;
